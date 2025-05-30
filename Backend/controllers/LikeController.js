import MeGusta from '../models/LikeModel.js';
import Publicacion from '../models/PublicacionModel.js';
import Profile from '../models/ProfileModel.js';
import { createNotification } from '../Services/NotificationService.js';


export const toggleLike = async (req, res) => {
  try {
    const { postId } = req.params;    const userId = req.user.id;
    
    console.log(`Petición de like para publicación ${postId} por usuario ${userId}`);
    
    if (!postId) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de publicación válido.'
      });
    }
    
    
    if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de publicación no válido para like: ${postId}`);
      return res.status(200).json({
        liked: false,
        likeCount: 0,
        message: 'No se puede dar like a una publicación de ejemplo'
      });    }
    
    
    const publicacion = await Publicacion.findById(postId)
                              .populate({
                                path: 'perfilId',
                                model: 'Profile',
                                select: 'accountId nombre nombreUsuario fotoPerfil'
                              });
    
    if (!publicacion || publicacion.eliminada) {
      return res.status(404).json({
        error: 'Publicación no encontrada',
        details: 'La publicación solicitada no existe o ha sido eliminada.'
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil asociado a tu cuenta.'
      });
    }
    
    
    const existingLike = await MeGusta.findOne({
      perfilId: perfil._id,
      publicacionId: postId
    });
    
    
    if (existingLike) {
      await MeGusta.deleteOne({
        perfilId: perfil._id,
        publicacionId: postId
      });
      
      
      if (publicacion.contadorMeGusta > 0) {
        publicacion.contadorMeGusta -= 1;
        await publicacion.save();
      }
      
      console.log(`💔 Like eliminado en publicación ${postId}`);
      
      return res.status(200).json({
        liked: false,
        likeCount: publicacion.contadorMeGusta,
        message: 'Like eliminado correctamente'
      });
    }
    
      const nuevoLike = new MeGusta({
      perfilId: perfil._id,
      publicacionId: postId,
      fecha: new Date()
    });
    await nuevoLike.save();
      publicacion.contadorMeGusta += 1;
    await publicacion.save();
    
    // Enviar notificación al autor de la publicación si no es el mismo usuario
    console.log('Checking like notification conditions: ', {
      hasPerfilId: !!publicacion.perfilId,
      hasAccountId: !!(publicacion.perfilId && publicacion.perfilId.accountId),
      currentUserId: userId,
      targetUserId: publicacion.perfilId ? publicacion.perfilId.accountId : 'undefined'
    });

    if (publicacion.perfilId && publicacion.perfilId.accountId && 
        publicacion.perfilId.accountId.toString() !== userId) {
      try {
        await createNotification(publicacion.perfilId.accountId.toString(), {
          type: 'like',
          senderProfileId: perfil._id,
          targetId: postId,
          targetType: 'Publicacion',
          message: `A ${perfil.nombre} le gustó tu publicación`
        });
        console.log(`Notificación de like enviada a usuario ${publicacion.perfilId.accountId}`);
      } catch (notifError) {
        console.error('Error al enviar notificación de like:', notifError);
      }
    }
    
    console.log(`Like añadido en publicación ${postId}`);
    
    // Enviar notificación al autor de la publicación si no es el mismo usuario
    const publicacionCompleta = await Publicacion.findById(postId).populate('perfilId');
    
    if (publicacionCompleta.perfilId.accountId.toString() !== userId) {
      try {
        await createNotification(publicacionCompleta.perfilId.accountId, {
          type: 'like',
          senderProfileId: perfil._id,
          targetId: postId,
          targetType: 'Publicacion',
          message: `A ${perfil.nombre} le gustó tu publicación`
        });
        console.log(`Notificación de like enviada a usuario ${publicacionCompleta.perfilId.accountId}`);
      } catch (notifError) {
        console.error('Error al enviar notificación de like:', notifError);
        // No detener el flujo por un error en la notificación
      }
    }
    
    return res.status(200).json({
      liked: true,
      likeCount: publicacion.contadorMeGusta,
      message: 'Like añadido correctamente'
    });
    
  } catch (err) {
    console.error('❌ Error al procesar like:', err);
    return res.status(500).json({
      error: 'Error al procesar la acción de like',
      details: err.message
    });
  }
};


export const checkLike = async (req, res) => {
  try {
    const { postId } = req.params;
    const userId = req.user.id;
    
    if (!postId) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de publicación válido.'
      });
    }
    
    
    if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de publicación no válido para verificar like: ${postId}`);
      return res.status(200).json({
        liked: false
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil asociado a tu cuenta.'
      });
    }
    
    
    const existingLike = await MeGusta.findOne({
      perfilId: perfil._id,
      publicacionId: postId
    });
    
    return res.status(200).json({
      liked: !!existingLike
    });
    
  } catch (err) {
    console.error('❌ Error al verificar like:', err);
    return res.status(500).json({
      error: 'Error al verificar like',
      details: err.message
    });
  }
};


export const getLikes = async (req, res) => {
  try {
    const { postId } = req.params;
    
    if (!postId) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de publicación válido.'
      });
    }
    
    
    if (!postId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de publicación no válido para obtener likes: ${postId}`);
      return res.status(200).json({
        data: [],
        metadata: {
          total: 0,
          page: 1,
          limit: 10,
          pages: 0
        }
      });
    }
    
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    
    const likes = await MeGusta.find({ publicacionId: postId })
      .sort({ fecha: -1 })
      .skip(skip)
      .limit(limit);
    
    
    const total = await MeGusta.countDocuments({ publicacionId: postId });
    
    
    if (likes.length === 0) {
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
    
    
    const perfilIds = [...new Set(likes.map(like => like.perfilId))];
    
    
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
    
    
    const likesConPerfil = likes.map(like => {
      const perfilId = like.perfilId.toString();
      return {
        ...like.toObject(),
        perfil: perfilesMap[perfilId] || null
      };
    });
    
    return res.status(200).json({
      data: likesConPerfil,
      metadata: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (err) {
    console.error('❌ Error al obtener likes:', err);
    return res.status(500).json({
      error: 'Error al obtener likes',
      details: err.message
    });
  }
};
