import {
  createNotification,
  markNotificationAsRead,
  deleteNotification,
  getUnreadNotifications,
  getAllNotifications
} from '../Services/NotificationService.js';
import Notificacion from '../models/NotificacionModel.js';

/**
 * Obtener notificaciones no leídas del usuario
 */
export const getUserUnreadNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log("Obteniendo notificaciones no leídas para usuario:", userId);
    
    const notificaciones = await getUnreadNotifications(userId);
    
    return res.status(200).json({
      count: notificaciones.length,
      notifications: notificaciones
    });
  } catch (error) {
    console.error('Error al obtener notificaciones no leídas:', error);
    return res.status(500).json({
      error: 'Error al obtener notificaciones',
      details: error.message
    });
  }
};

/**
 * Obtener todas las notificaciones del usuario
 */
export const getUserAllNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log("Obteniendo todas las notificaciones para usuario:", userId);
    
    const notificaciones = await getAllNotifications(userId);
    
    return res.status(200).json({
      count: notificaciones.length,
      notifications: notificaciones
    });
  } catch (error) {
    console.error('Error al obtener notificaciones:', error);
    return res.status(500).json({
      error: 'Error al obtener notificaciones',
      details: error.message
    });
  }
};

/**
 * Marcar notificación como leída
 */
export const markAsRead = async (req, res) => {
  try {
    const userId = req.user.id;
    const { notificationId } = req.params;
    
    console.log(`Marcando notificación ${notificationId} como leída para usuario ${userId}`);
    
    const notificacion = await markNotificationAsRead(userId, notificationId);
    
    return res.status(200).json({
      message: 'Notificación marcada como leída',
      notification: notificacion
    });
  } catch (error) {
    console.error('Error al marcar notificación como leída:', error);
    return res.status(500).json({
      error: 'Error al actualizar notificación',
      details: error.message
    });
  }
};

/**
 * Eliminar notificación
 */
export const removeNotification = async (req, res) => {
  try {
    const userId = req.user.id;
    const { notificationId } = req.params;
    
    console.log(`Eliminando notificación ${notificationId} para usuario ${userId}`);
    
    await deleteNotification(userId, notificationId);
    
    return res.status(200).json({
      message: 'Notificación eliminada correctamente'
    });
  } catch (error) {
    console.error('Error al eliminar notificación:', error);
    return res.status(500).json({
      error: 'Error al eliminar notificación',
      details: error.message
    });
  }
};
/**
 * Marcar todas las notificaciones como leídas
 */
export const markAllAsRead = async (req, res) => {
  try {
    const userId = req.user.id;
    
    console.log(`Marcando todas las notificaciones como leídas para usuario ${userId}`);
    
    // 1. Actualizar en MongoDB
    const result = await Notificacion.updateMany(
      { usuarioId: userId, leida: false },
      { leida: true }
    );
    
    // 2. Obtener todas las notificaciones no leídas para actualizar en Firebase
    const notificaciones = await Notificacion.find({
      usuarioId: userId,
      leida: false
    });
    
    // 3. Importar Firebase admin para acceder directamente a la base de datos
    const { getDatabase } = await import('firebase-admin/database');
    const db = getDatabase();
    
    // 4. Actualizar todas las notificaciones en Firebase
    const updates = {};
    notificaciones.forEach(notif => {
      updates[`/notifications/${userId}/${notif._id.toString()}/read`] = true;
    });
    
    await db.ref().update(updates);
    
    return res.status(200).json({
      message: 'Todas las notificaciones marcadas como leídas',
      updated: result.modifiedCount
    });
  } catch (error) {
    console.error('Error al marcar todas las notificaciones como leídas:', error);
    return res.status(500).json({
      error: 'Error al actualizar notificaciones',
      details: error.message
    });
  }
};
