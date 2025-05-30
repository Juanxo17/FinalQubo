import Comentario from "../models/ComentarioModel.js";
import Publicacion from "../models/PublicacionModel.js";
import Profile from "../models/ProfileModel.js";
import { createNotification } from '../Services/NotificationService.js';


export const createComment = async (req, res) => {
  try {
    console.log("Creación de comentario, datos recibidos:", req.body);
    
    const { contenido } = req.body;
    
    const publicacionId = req.params.id || req.body.publicacionId;
    const userId = req.user.id; 
      if (!contenido || contenido.trim() === '') {
      console.log("Contenido de comentario vacío");
      return res.status(400).json({
        error: 'Contenido requerido',
        details: 'El comentario debe tener contenido.'
      });
    }
      if (!publicacionId) {
      console.log("ID de publicación no proporcionado");
      return res.status(400).json({
        error: 'ID de publicación requerido',
        details: 'Se requiere el ID de la publicación.'
      });    }
    
      const publicacion = await Publicacion.findById(publicacionId)
                              .populate({
                                path: 'perfilId',
                                model: 'Profile',
                                select: 'accountId nombre nombreUsuario fotoPerfil'
                              });
      if (!publicacion || publicacion.eliminada) {
      console.log("Publicación no encontrada o eliminada:", publicacionId);
      return res.status(404).json({
        error: 'Publicación no encontrada',
        details: 'La publicación no existe o ha sido eliminada.'
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
      if (!perfil) {
      console.log("No se encontró perfil para el usuario:", userId);
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'Debes crear un perfil antes de comentar.'
      });
    }
    
    
    const nuevoComentario = new Comentario({
      perfilId: perfil._id,
      publicacionId: publicacionId,
      contenido,
      fecha: new Date()    });    
// Check if we need to send a notification (not to self and have valid data)
console.log('Checking notification conditions: ', {
  hasPerfilId: !!publicacion.perfilId,
  hasAccountId: !!(publicacion.perfilId && publicacion.perfilId.accountId),
  currentUserId: userId,
  targetUserId: publicacion.perfilId ? publicacion.perfilId.accountId : 'undefined'
});

if (publicacion.perfilId && 
    publicacion.perfilId.accountId && 
    publicacion.perfilId.accountId.toString() !== userId) {
  try {
    await createNotification(publicacion.perfilId.accountId.toString(), {
      type: 'comment',
      senderProfileId: perfil._id,
      targetId: publicacionId,
      targetType: 'Publicacion',
      message: `${perfil.nombre} comentó en tu publicación`
    });
    console.log(`Notificación de comentario enviada a usuario ${publicacion.perfilId.accountId}`);
  } catch (notifError) {
    console.error('Error al enviar notificación de comentario:', notifError);
    // No detener el flujo por un error en la notificación
  }
}
      await nuevoComentario.save();
    console.log("Comentario creado con ID:", nuevoComentario._id);
    
    
    publicacion.contadorComentarios += 1;
    await publicacion.save();
    
    
    const comentarioConPerfil = {
      ...nuevoComentario.toObject(),
      perfil: {
        nombre: perfil.nombre,
        nombreUsuario: perfil.nombreUsuario,
        fotoPerfil: perfil.fotoPerfil
      }
    };
    
    return res.status(201).json({
      message: 'Comentario creado exitosamente',
      comentario: comentarioConPerfil
    });
      } catch (err) {
    console.error('Error al crear comentario:', err);
    return res.status(500).json({
      error: 'Error al crear el comentario',
      details: err.message
    });
  }
};


export const getPostComments = async (req, res) => {
  try {    const { id } = req.params;
    
    console.log(`Obteniendo comentarios para publicación ID: ${id}`);
      if (!id) {
      console.log("ID de publicación no proporcionado");
      return res.status(400).json({
        error: 'ID de publicación requerido',
        details: 'Se requiere un ID de publicación válido.'
      });
    }
      
    if (!/^[0-9a-fA-F]{24}$/.test(id)) {
      console.log(`ID de publicación con formato inválido: ${id}`);
      return res.status(400).json({
        error: 'ID de publicación inválido',
        details: `El ID proporcionado (${id}) no tiene un formato válido.`
      });
    }
    
    
    const publicacion = await Publicacion.findById(id);
      if (!publicacion) {
      console.log(`Publicación no encontrada con ID: ${id}`);
      return res.status(404).json({
        error: 'Publicación no encontrada',
        details: 'La publicación no existe.'
      });
    }
      if (publicacion.eliminada) {
      console.log(`Publicación eliminada con ID: ${id}`);
      return res.status(404).json({
        error: 'Publicación no disponible',
        details: 'La publicación ha sido eliminada.'
      });
    }
    
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
      
    const comentarios = await Comentario.find({ 
      publicacionId: id,
      eliminado: false
    })
      .sort({ fecha: -1 })
      .skip(skip)
      .limit(limit);
    
    
    const total = await Comentario.countDocuments({ 
      publicacionId: id,
      eliminado: false
    });
    
    
    if (comentarios.length === 0) {
      return res.status(200).json({
        data: [],
        metadata: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      });
    }
    
    
    const perfilIds = [...new Set(comentarios.map(com => com.perfilId))];
    
    
    const perfiles = await Profile.find({ 
      _id: { $in: perfilIds } 
    }, 'nombre nombreUsuario fotoPerfil');
    
    
    const perfilesMap = perfiles.reduce((map, perfil) => {
      map[perfil._id.toString()] = {
        nombre: perfil.nombre,
        nombreUsuario: perfil.nombreUsuario,
        fotoPerfil: perfil.fotoPerfil
      };
      return map;
    }, {});
    
    
    const comentariosConPerfil = comentarios.map(com => {
      const perfilId = com.perfilId.toString();
      return {
        ...com.toObject(),
        perfil: perfilesMap[perfilId] || null
      };
    });
    
    return res.status(200).json({
      data: comentariosConPerfil,
      metadata: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (err) {
    console.error('❌ Error al obtener comentarios:', err);
    return res.status(500).json({
      error: 'Error al obtener los comentarios',
      details: err.message
    });
  }
};


export const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { contenido } = req.body;
    const userId = req.user.id;
    
    if (!id) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de comentario válido.'
      });
    }
    
    if (!contenido || contenido.trim() === '') {
      return res.status(400).json({
        error: 'Contenido requerido',
        details: 'El comentario debe tener contenido.'
      });
    }
    
    
    const comentario = await Comentario.findById(id);
    
    if (!comentario || comentario.eliminado) {
      return res.status(404).json({
        error: 'Comentario no encontrado',
        details: 'El comentario solicitado no existe o ha sido eliminado.'
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil || comentario.perfilId.toString() !== perfil._id.toString()) {
      return res.status(403).json({
        error: 'Acceso denegado',
        details: 'No tienes permiso para editar este comentario.'
      });
    }
    
    
    comentario.contenido = contenido;
    comentario.editado = true;
    comentario.fechaEdicion = new Date();
    
    await comentario.save();
    
    
    const comentarioActualizado = {
      ...comentario.toObject(),
      perfil: {
        nombre: perfil.nombre,
        nombreUsuario: perfil.nombreUsuario,
        fotoPerfil: perfil.fotoPerfil
      }
    };
    
    return res.status(200).json({
      message: 'Comentario actualizado exitosamente',
      comentario: comentarioActualizado
    });
    
  } catch (err) {
    console.error('❌ Error al actualizar comentario:', err);
    return res.status(500).json({
      error: 'Error al actualizar el comentario',
      details: err.message
    });
  }
};


export const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    if (!id) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de comentario válido.'
      });
    }
    
    
    const comentario = await Comentario.findById(id);
    
    if (!comentario) {
      return res.status(404).json({
        error: 'Comentario no encontrado',
        details: 'El comentario solicitado no existe.'
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil || comentario.perfilId.toString() !== perfil._id.toString()) {
      return res.status(403).json({
        error: 'Acceso denegado',
        details: 'No tienes permiso para eliminar este comentario.'
      });
    }
    
    
    comentario.eliminado = true;
    await comentario.save();
    
    
    const publicacion = await Publicacion.findById(comentario.publicacionId);
    if (publicacion && publicacion.contadorComentarios > 0) {
      publicacion.contadorComentarios -= 1;
      await publicacion.save();
    }
    
    return res.status(200).json({
      message: 'Comentario eliminado exitosamente',
      comentarioId: comentario._id
    });
    
  } catch (err) {
    console.error('❌ Error al eliminar comentario:', err);
    return res.status(500).json({
      error: 'Error al eliminar el comentario',
      details: err.message
    });
  }
};


export const getUserComments = async (req, res) => {
  try {
    const userId = req.user.id;
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil asociado a tu cuenta.'
      });
    }
    
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    
    const comentarios = await Comentario.find({ 
      perfilId: perfil._id,
      eliminado: false
    })
      .sort({ fecha: -1 })
      .skip(skip)
      .limit(limit);
    
    
    const total = await Comentario.countDocuments({ 
      perfilId: perfil._id,
      eliminado: false
    });
    
    
    if (comentarios.length > 0) {
      
      const publicacionIds = [...new Set(comentarios.map(com => com.publicacionId))];
      
      
      const publicaciones = await Publicacion.find({ 
        _id: { $in: publicacionIds } 
      }, 'contenido');
      
      
      const publicacionesMap = publicaciones.reduce((map, pub) => {
        map[pub._id.toString()] = {
          contenido: pub.contenido.substring(0, 50) + (pub.contenido.length > 50 ? '...' : '')
        };
        return map;
      }, {});
      
      
      const comentariosEnriquecidos = comentarios.map(com => {
        const publicacionId = com.publicacionId.toString();
        return {
          ...com.toObject(),
          publicacion: publicacionesMap[publicacionId] || null,
          perfil: {
            nombre: perfil.nombre,
            nombreUsuario: perfil.nombreUsuario,
            fotoPerfil: perfil.fotoPerfil
          }
        };
      });
      
      return res.status(200).json({
        data: comentariosEnriquecidos,
        metadata: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      });
    } else {
      
      return res.status(200).json({
        data: [],
        metadata: {
          total,
          page,
          limit,
          pages: Math.ceil(total / limit)
        }
      });
    }
    
  } catch (err) {
    console.error('❌ Error al obtener comentarios del usuario:', err);
    return res.status(500).json({
      error: 'Error al obtener tus comentarios',
      details: err.message
    });
  }
};


