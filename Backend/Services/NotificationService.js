import { getDatabase } from 'firebase-admin/database';
import { initializeApp, cert, getApp } from 'firebase-admin/app';
import Notificacion from '../models/NotificacionModel.js';
import dotenv from 'dotenv';

dotenv.config();

// Inicializar la aplicación Firebase Admin para notificaciones
let firebaseAdmin;
try {
  // Intenta obtener la aplicación existente
  firebaseAdmin = getApp('notification-service');
} catch (error) {
  // Si no existe, inicializa una nueva aplicación
  try {
    // Solo inicializar Firebase si todas las variables están disponibles
    if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
      const serviceAccount = {
        type: "service_account",
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        client_email: process.env.FIREBASE_CLIENT_EMAIL,
        client_id: process.env.FIREBASE_CLIENT_ID,
        auth_uri: "https://accounts.google.com/o/oauth2/auth",
        token_uri: "https://oauth2.googleapis.com/token",
        auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
        client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
      };

      firebaseAdmin = initializeApp({
        credential: cert(serviceAccount),
        databaseURL: "https://qubo-db982-default-rtdb.firebaseio.com"
      }, 'notification-service');
      
      console.log('Firebase Notification Service initialized successfully');
    } else {
      console.warn('Firebase variables not found, notification service disabled');
      throw new Error('Firebase variables not configured');
    }
  } catch (initError) {
    console.error('Error al inicializar Firebase Admin para notificaciones:', initError);
    throw initError;
  }
}

// Obtener referencia a la base de datos
const db = getDatabase(firebaseAdmin);

/**
 * Crear una nueva notificación
 * @param {string} userId - ID del usuario que recibirá la notificación
 * @param {Object} notificationData - Datos de la notificación
 * @param {string} notificationData.type - Tipo de notificación ('like', 'comment', 'follow', etc.)
 * @param {string} notificationData.senderProfileId - ID del perfil que genera la notificación
 * @param {string} notificationData.targetId - ID del objeto relacionado (publicación, comentario, etc.)
 * @param {string} notificationData.targetType - Tipo de objeto relacionado ('Publicacion', 'Comentario', 'Profile')
 * @param {string} notificationData.message - Mensaje de la notificación
 * @returns {Promise<Object>} - La notificación creada
 */
export const createNotification = async (userId, notificationData) => {
  try {
    console.log("Creando notificación para usuario:", userId, "con datos:", notificationData);
    
    // 1. Guardar en MongoDB usando el modelo existente
    const notificacion = new Notificacion({
      usuarioId: userId,
      tipo: notificationData.type,
      remitente: notificationData.senderProfileId,
      objetoId: notificationData.targetId,
      tipoObjeto: notificationData.targetType,
      mensaje: notificationData.message,
      leida: false,
      fecha: new Date()
    });
    
    await notificacion.save();
    console.log("Notificación guardada en MongoDB con ID:", notificacion._id);
    
    // 2. Enviar a Firebase Realtime Database para entrega en tiempo real
    const notificationRef = db.ref(`notifications/${userId}/${notificacion._id.toString()}`);
    await notificationRef.set({
      id: notificacion._id.toString(),
      type: notificationData.type,
      senderProfileId: notificationData.senderProfileId,
      targetId: notificationData.targetId,
      targetType: notificationData.targetType,
      message: notificationData.message,
      read: false,
      createdAt: Date.now()
    });
    
    console.log("Notificación enviada a Firebase Realtime Database");
    return notificacion;
  } catch (error) {
    console.error('Error detallado al crear notificación:', error);
    throw error;
  }
};

/**
 * Marcar una notificación como leída
 * @param {string} userId - ID del usuario propietario de la notificación
 * @param {string} notificationId - ID de la notificación
 * @returns {Promise<Object>} - La notificación actualizada
 */
export const markNotificationAsRead = async (userId, notificationId) => {
  try {
    // 1. Actualizar en MongoDB
    const notificacion = await Notificacion.findByIdAndUpdate(
      notificationId,
      { leida: true },
      { new: true }
    );
    
    if (!notificacion) {
      throw new Error('Notificación no encontrada');
    }
    
    // 2. Actualizar en Firebase
    const notificationRef = db.ref(`notifications/${userId}/${notificationId}`);
    await notificationRef.update({ read: true });
    
    return notificacion;
  } catch (error) {
    console.error('Error al marcar notificación como leída:', error);
    throw error;
  }
};

/**
 * Eliminar una notificación
 * @param {string} userId - ID del usuario propietario de la notificación
 * @param {string} notificationId - ID de la notificación
 * @returns {Promise<Object>} - Objeto con estado de éxito
 */
export const deleteNotification = async (userId, notificationId) => {
  try {
    // 1. Eliminar de MongoDB
    const notificacion = await Notificacion.findByIdAndDelete(notificationId);
    
    if (!notificacion) {
      throw new Error('Notificación no encontrada');
    }
    
    // 2. Eliminar de Firebase
    const notificationRef = db.ref(`notifications/${userId}/${notificationId}`);
    await notificationRef.remove();
    
    return { success: true };
  } catch (error) {
    console.error('Error al eliminar notificación:', error);
    throw error;
  }
};

/**
 * Obtener notificaciones no leídas de un usuario
 * @param {string} userId - ID del usuario
 * @returns {Promise<Array>} - Lista de notificaciones no leídas
 */
export const getUnreadNotifications = async (userId) => {
  try {
    return await Notificacion.find({
      usuarioId: userId,
      leida: false
    }).sort({ fecha: -1 });
  } catch (error) {
    console.error('Error al obtener notificaciones no leídas:', error);
    throw error;
  }
};

/**
 * Obtener todas las notificaciones de un usuario
 * @param {string} userId - ID del usuario
 * @returns {Promise<Array>} - Lista de notificaciones
 */
export const getAllNotifications = async (userId) => {
  try {
    return await Notificacion.find({
      usuarioId: userId
    }).sort({ fecha: -1 });
  } catch (error) {
    console.error('Error al obtener notificaciones:', error);
    throw error;
  }
};
