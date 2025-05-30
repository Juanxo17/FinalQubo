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
