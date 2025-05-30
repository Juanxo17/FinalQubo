import Publicacion from "../models/PublicacionModel.js";
import Profile from "../models/ProfileModel.js";


export const createPost = async (req, res) => {
  try {
    console.log("Creación de publicación, datos recibidos:", req.body);
    
    const { contenido, imagenUrl } = req.body;
    const userId = req.user.id; 
    
    if (!contenido || contenido.trim() === '') {
      console.log(" Contenido de publicación vacío");
      return res.status(400).json({
        error: 'Contenido requerido',
        details: 'La publicación debe tener contenido.'
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil) {
      console.log(" No se encontró perfil para el usuario:", userId);
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'Debes crear un perfil antes de publicar contenido.'
      });
    }
    
    
    const nuevaPublicacion = new Publicacion({
      perfilId: perfil._id,
      contenido,
      imagenUrl: imagenUrl || '',
      fechaCreacion: new Date()
    });
    
    await nuevaPublicacion.save();
    console.log(" Publicación creada con ID:", nuevaPublicacion._id);
    
    
    const publicacionConPerfil = {
      ...nuevaPublicacion.toObject(),
      perfil: {
        nombre: perfil.nombre,
        nombreUsuario: perfil.nombreUsuario,
        fotoPerfil: perfil.fotoPerfil
      }
    };
    
    return res.status(201).json({
      message: 'Publicación creada exitosamente',
      publicacion: publicacionConPerfil
    });
    
  } catch (err) {
    console.error('❌ Error al crear publicación:', err);
    return res.status(500).json({
      error: 'Error al crear la publicación',
      details: err.message
    });
  }
};


export const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de publicación válido.'
      });
    }
    
    const publicacion = await Publicacion.findById(id);
    
    if (!publicacion || publicacion.eliminada) {
      return res.status(404).json({
        error: 'Publicación no encontrada',
        details: 'La publicación solicitada no existe o ha sido eliminada.'
      });
    }
    
    
    const perfil = await Profile.findById(publicacion.perfilId, 'nombre nombreUsuario fotoPerfil');
    
    const publicacionConPerfil = {
      ...publicacion.toObject(),
      perfil: perfil ? {
        nombre: perfil.nombre,
        nombreUsuario: perfil.nombreUsuario,
        fotoPerfil: perfil.fotoPerfil
      } : null
    };
    
    return res.status(200).json(publicacionConPerfil);
    
  } catch (err) {
    console.error('❌ Error al obtener publicación:', err);
    return res.status(500).json({
      error: 'Error al obtener la publicación',
      details: err.message
    });
  }
};


export const getFeedPosts = async (req, res) => {
  try {
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    
    const publicaciones = await Publicacion.find({ eliminada: false })
      .sort({ fechaCreacion: -1 })
      .skip(skip)
      .limit(limit);
    
    
    const total = await Publicacion.countDocuments({ eliminada: false });
    
    
    if (publicaciones.length === 0) {
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
    
    
    const perfilIds = [...new Set(publicaciones.map(pub => pub.perfilId))];
    
    
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
    
    
    const publicacionesConPerfil = publicaciones.map(pub => {
      const perfilId = pub.perfilId.toString();
      return {
        ...pub.toObject(),
        perfil: perfilesMap[perfilId] || null
      };
    });
    
    return res.status(200).json({
      data: publicacionesConPerfil,
      metadata: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (err) {
    console.error('❌ Error al obtener publicaciones para el feed:', err);
    return res.status(500).json({
      error: 'Error al obtener publicaciones',
      details: err.message
    });
  }
};


export const getProfilePosts = async (req, res) => {
  try {
    const { profileId } = req.params;
    
    if (!profileId) {
      return res.status(400).json({
        error: 'ID de perfil requerido',
        details: 'Se requiere un ID de perfil válido.'
      });
    }
    
    
    if (!profileId.match(/^[0-9a-fA-F]{24}$/)) {
      console.log(`ID de perfil no válido para obtener publicaciones: ${profileId}`);
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
    
    
    const publicaciones = await Publicacion.find({ 
      perfilId: profileId,
      eliminada: false
    })
      .sort({ fechaCreacion: -1 })
      .skip(skip)
      .limit(limit);
    
    
    const total = await Publicacion.countDocuments({ 
      perfilId: profileId,
      eliminada: false
    });
    
    
    if (publicaciones.length === 0) {
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
    
    
    const perfil = await Profile.findById(profileId, 'nombre nombreUsuario fotoPerfil');
    
    if (!perfil) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'El perfil solicitado no existe.'
      });
    }
    
    
    const perfilData = {
      nombre: perfil.nombre,
      nombreUsuario: perfil.nombreUsuario,
      fotoPerfil: perfil.fotoPerfil
    };
    
    
    const publicacionesConPerfil = publicaciones.map(pub => ({
      ...pub.toObject(),
      perfil: perfilData
    }));
    
    return res.status(200).json({
      data: publicacionesConPerfil,
      metadata: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (err) {
    console.error('❌ Error al obtener publicaciones del perfil:', err);
    return res.status(500).json({
      error: 'Error al obtener publicaciones del perfil',
      details: err.message
    });
  }
};


export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { contenido, imagenUrl } = req.body;
    const userId = req.user.id;
    
    if (!id) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de publicación válido.'
      });
    }
    
    if (!contenido || contenido.trim() === '') {
      return res.status(400).json({
        error: 'Contenido requerido',
        details: 'La publicación debe tener contenido.'
      });
    }
    
    
    const publicacion = await Publicacion.findById(id);
    
    if (!publicacion || publicacion.eliminada) {
      return res.status(404).json({
        error: 'Publicación no encontrada',
        details: 'La publicación solicitada no existe o ha sido eliminada.'
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil || publicacion.perfilId.toString() !== perfil._id.toString()) {
      return res.status(403).json({
        error: 'Acceso denegado',
        details: 'No tienes permiso para editar esta publicación.'
      });
    }
    
    
    publicacion.contenido = contenido;
    if (imagenUrl !== undefined) {
      publicacion.imagenUrl = imagenUrl;
    }
    publicacion.editada = true;
    publicacion.fechaEdicion = new Date();
    
    await publicacion.save();
    
    
    const publicacionActualizada = {
      ...publicacion.toObject(),
      perfil: {
        nombre: perfil.nombre,
        nombreUsuario: perfil.nombreUsuario,
        fotoPerfil: perfil.fotoPerfil
      }
    };
    
    return res.status(200).json({
      message: 'Publicación actualizada exitosamente',
      publicacion: publicacionActualizada
    });
    
  } catch (err) {
    console.error('❌ Error al actualizar publicación:', err);
    return res.status(500).json({
      error: 'Error al actualizar la publicación',
      details: err.message
    });
  }
};


export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    
    if (!id) {
      return res.status(400).json({
        error: 'ID requerido',
        details: 'Se requiere un ID de publicación válido.'
      });
    }
    
    
    const publicacion = await Publicacion.findById(id);
    
    if (!publicacion) {
      return res.status(404).json({
        error: 'Publicación no encontrada',
        details: 'La publicación solicitada no existe.'
      });
    }
    
    
    const perfil = await Profile.findOne({ accountId: userId });
    
    if (!perfil || publicacion.perfilId.toString() !== perfil._id.toString()) {
      return res.status(403).json({
        error: 'Acceso denegado',
        details: 'No tienes permiso para eliminar esta publicación.'
      });
    }
    
    
    publicacion.eliminada = true;
    await publicacion.save();
    
    return res.status(200).json({
      message: 'Publicación eliminada exitosamente',
      publicacionId: publicacion._id
    });
    
  } catch (err) {
    console.error('❌ Error al eliminar publicación:', err);
    return res.status(500).json({
      error: 'Error al eliminar la publicación',
      details: err.message
    });
  }
};


export const getMyPosts = async (req, res) => {
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
    
    
    const publicaciones = await Publicacion.find({ 
      perfilId: perfil._id,
      eliminada: false
    })
      .sort({ fechaCreacion: -1 })
      .skip(skip)
      .limit(limit);
    
    
    const total = await Publicacion.countDocuments({ 
      perfilId: perfil._id,
      eliminada: false
    });
    
    
    const perfilData = {
      nombre: perfil.nombre,
      nombreUsuario: perfil.nombreUsuario,
      fotoPerfil: perfil.fotoPerfil
    };
    
    
    const publicacionesConPerfil = publicaciones.map(pub => ({
      ...pub.toObject(),
      perfil: perfilData
    }));
    
    return res.status(200).json({
      data: publicacionesConPerfil,
      metadata: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
    
  } catch (err) {
    console.error('❌ Error al obtener mis publicaciones:', err);
    return res.status(500).json({
      error: 'Error al obtener tus publicaciones',
      details: err.message
    });
  }
};
