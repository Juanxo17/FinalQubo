import Seguidor from '../models/SeguidorModel.js';
import Profile from '../models/ProfileModel.js';
import { createNotification } from '../Services/NotificationService.js';


export const toggleFollow = async (req, res) => {
  try {
    const { profileId } = req.params; 
    const userId = req.user.id;

    if (!profileId) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de perfil válido.'
      });
    }

    
    if (!profileId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de perfil no válido: ${profileId}`);
      return res.status(200).json({
        following: false,
        message: 'No se pudo procesar la acción de seguir con el ID proporcionado.'
      });
    }

    
    const miPerfil = await Profile.findOne({ accountId: userId });
    if (!miPerfil) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil asociado a tu cuenta.'
      });
    }

    
    if (miPerfil._id.toString() === profileId) {
      return res.status(400).json({
        error: 'No permitido',
        details: 'No puedes seguirte a ti mismo.'
      });
    }

    
    const existingFollow = await Seguidor.findOne({
      seguidorId: miPerfil._id,
      seguidoId: profileId
    });

    if (existingFollow) {
      
      await Seguidor.deleteOne({ _id: existingFollow._id });
      return res.status(200).json({
        following: false,
        message: 'Has dejado de seguir a este usuario.'
      });
    }

      const nuevoSeguidor = new Seguidor({
      seguidorId: miPerfil._id,
      seguidoId: profileId,
      fecha: new Date()
    });
    await nuevoSeguidor.save();
      // Obtener el perfil seguido para enviar la notificación
    const perfilSeguido = await Profile.findById(profileId);
    console.log('Checking follow notification conditions: ', {
      hasPerfilSeguido: !!perfilSeguido,
      hasAccountId: !!(perfilSeguido && perfilSeguido.accountId),
      followerId: miPerfil._id.toString(),
      followedProfileId: profileId
    });

    if (perfilSeguido && perfilSeguido.accountId) {
      try {
        await createNotification(perfilSeguido.accountId.toString(), {
          type: 'follow',
          senderProfileId: miPerfil._id,
          targetId: profileId,
          targetType: 'Profile',
          message: `${miPerfil.nombre} comenzó a seguirte`
        });
        console.log(`Notificación de seguimiento enviada a usuario ${perfilSeguido.accountId}`);
      } catch (notifError) {
        console.error('Error al enviar notificación de seguimiento:', notifError);
      }
    }
    
    return res.status(200).json({
      following: true,
      message: 'Ahora sigues a este usuario.'
    });
  } catch (err) {
    console.error('❌ Error al procesar follow:', err);
    return res.status(500).json({
      error: 'Error al procesar follow',
      details: err.message
    });
  }
};


export const getFollowers = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!profileId) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de perfil válido.'
      });
    }
    
    
    if (!profileId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de perfil no válido para obtener seguidores: ${profileId}`);
      return res.status(200).json({
        data: [],
        metadata: { total: 0, page: 1, limit: 10, pages: 0 }
      });
    }
    
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const seguidores = await Seguidor.find({ seguidoId: profileId })
      .sort({ fecha: -1 })
      .skip(skip)
      .limit(limit);
    const total = await Seguidor.countDocuments({ seguidoId: profileId });
    
    const seguidorIds = seguidores.map(s => s.seguidorId);
    const perfiles = await Profile.find({ _id: { $in: seguidorIds } }, 'nombre nombreUsuario fotoPerfil');
    return res.status(200).json({
      data: perfiles,
      metadata: { total, page, limit, pages: Math.ceil(total / limit) }
    });
  } catch (err) {
    console.error('❌ Error al obtener seguidores:', err);
    return res.status(500).json({
      error: 'Error al obtener seguidores',
      details: err.message
    });
  }
};


export const getFollowing = async (req, res) => {
  try {
    const { profileId } = req.params;
    if (!profileId) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de perfil válido.'
      });
    }
    
    
    if (!profileId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de perfil no válido para obtener seguidos: ${profileId}`);
      return res.status(200).json({
        data: [],
        metadata: { total: 0, page: 1, limit: 10, pages: 0 }
      });
    }
    
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const seguidos = await Seguidor.find({ seguidorId: profileId })
      .sort({ fecha: -1 })
      .skip(skip)
      .limit(limit);
    const total = await Seguidor.countDocuments({ seguidorId: profileId });
    
    const seguidoIds = seguidos.map(s => s.seguidoId);
    const perfiles = await Profile.find({ _id: { $in: seguidoIds } }, 'nombre nombreUsuario fotoPerfil');
    return res.status(200).json({
      data: perfiles,
      metadata: { total, page, limit, pages: Math.ceil(total / limit) }
    });
  } catch (err) {
    console.error('❌ Error al obtener seguidos:', err);
    return res.status(500).json({
      error: 'Error al obtener seguidos',
      details: err.message
    });
  }
};


export const checkFollow = async (req, res) => {
  try {
    const { profileId } = req.params;
    const userId = req.user.id;
    if (!profileId) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de perfil válido.'
      });
    }

    
    if (!profileId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de perfil no válido para verificar seguimiento: ${profileId}`);
      return res.status(200).json({
        following: false
      });
    }
    const miPerfil = await Profile.findOne({ accountId: userId });
    if (!miPerfil) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil asociado a tu cuenta.'
      });
    }
    const existingFollow = await Seguidor.findOne({
      seguidorId: miPerfil._id,
      seguidoId: profileId
    });
    return res.status(200).json({
      following: !!existingFollow
    });
  } catch (err) {
    console.error('❌ Error al verificar follow:', err);
    return res.status(500).json({
      error: 'Error al verificar follow',
      details: err.message
    });
  }
};
