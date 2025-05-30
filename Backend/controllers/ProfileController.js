import Profile from "../models/ProfileModel.js";
import Account from "../models/AccountModel.js";
import Seguidor from "../models/SeguidorModel.js";


export const createProfile = async (req,res) =>{
    try{
        console.log("Datos recibidos:", req.body);
        console.log("Usuario autenticado:", req.user);
        
        const { nombre, nombreUsuario, biografia, fotoPerfil, accountId } = req.body;
        const authUserId = req.user.id;
        
        console.log("Account ID del cuerpo:", accountId);
        console.log("Auth User ID del token:", authUserId);

        if (!nombre || !nombreUsuario){
            console.log("Faltan datos requeridos. Nombre:", nombre, "NombreUsuario:", nombreUsuario);
            return res.status(400).json({
                error: 'Faltan datos requeridos',
                details: 'Se requiere al menos nombre y nombre de usuario.'
            });
        }        
        if (accountId && accountId !== authUserId) {
            console.log("Los IDs no coinciden. Token:", authUserId, "Body:", accountId);
            
        }

        const account = await Account.findById(authUserId);
        if (!account){
            console.log("No se encontró la cuenta con ID:", authUserId);
            return res.status(404).json({
                error: 'Cuenta no encontrada',
                details: 'No se encontró una cuenta asociada a tu sesión.'
            });
        }
        
        
        if (account.perfil_id) {
            console.log("El usuario ya tiene un perfil:", account.perfil_id);
            return res.status(409).json({
                error: 'Ya tienes un perfil',
                details: 'No es posible crear múltiples perfiles para una misma cuenta.'
            });
        }
        
        const existingUsername = await Profile.findOne({nombreUsuario});
        if (existingUsername){
            console.log("Nombre de usuario ya existe:", nombreUsuario);
            return res.status(409).json({
                error: "Nombre de usuario ya existe",
                details: "El nombre de usuario ingresado ya se encuentra en uso. Por favor, elige otro."
            });
        }
        
        
        console.log(" Creando nuevo perfil con datos:", { nombre, nombreUsuario, biografia, fotoPerfil });
        
        const newProfile = new Profile({
            nombre,
            nombreUsuario,
            biografia,
            fotoPerfil,
            accountId: authUserId 
        });
        
        await newProfile.save();
        console.log(" Perfil guardado con ID:", newProfile._id);
        
        
        account.perfil_id = newProfile._id;
        await account.save();
        console.log(" Cuenta actualizada con perfil_id:", newProfile._id);
        
        return res.status(201).json({
            message: 'Perfil creado con éxito',
            perfilId: newProfile._id
        });

    } catch (err) {
        console.log("Error al crear el perfil:", err);
        return res.status(500).json({ 
            error: 'Error al crear el perfil.',
            details: err.message
        });
    }
}


export const checkProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    
    
    const account = await Account.findById(userId);
    
    if (!account) {
      console.log("Cuenta no encontrada para el usuario:", userId);
      return res.status(404).json({ 
        error: 'Cuenta no encontrada',
        details: 'No se pudo encontrar una cuenta asociada a tu sesión.'
      });
    }
    
    
    if (account.perfil_id) {
    console.log("Usuario tiene perfil:", account.perfil_id);
      return res.status(200).json({ 
        hasProfile: true,
        perfilId: account.perfil_id
      });
    }
    
    
    const profile = await Profile.findOne({ accountId: userId });
    
    if (profile) {
      
      if (!account.perfil_id) {
      console.log("Actualizando cuenta con perfil_id:", profile._id);
        account.perfil_id = profile._id;
        await account.save();
      }
      
      return res.status(200).json({ 
        hasProfile: true,
        perfilId: profile._id
      });
    }
    
    
    console.log("Usuario sin perfil:", userId);
    return res.status(200).json({ hasProfile: false });
    
  } catch (err) {
    console.log("Error al verificar el perfil:", err);
    return res.status(500).json({ 
      error: 'Error al verificar el perfil',
      details: err.message 
    });
  }
};


export const getMyProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    
    
    const profile = await Profile.findOne({ accountId: userId });
    
    if (!profile) {
      return res.status(404).json({ 
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil asociado a tu cuenta'
      });
    }
    
    
    const seguidores = await Seguidor.countDocuments({ seguidoId: profile._id });
    const siguiendo = await Seguidor.countDocuments({ seguidorId: profile._id });
    
    console.log("Perfil encontrado con ID:", profile._id.toString());
    
    return res.status(200).json({
      ...profile.toObject(),
      _id: profile._id.toString(),  
      perfilId: profile._id.toString(),  
      seguidores,
      siguiendo
    });
    
  } catch (err) {
    console.log("Error al obtener perfil:", err);
    return res.status(500).json({ 
      error: 'Error al obtener el perfil',
      details: err.message 
    });
  }
};


export const updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { nombre, nombreUsuario, biografia, fotoPerfil } = req.body;
    
    
    if (!nombre || !nombreUsuario) {
      return res.status(400).json({
        error: 'Faltan datos requeridos',
        details: 'Se requiere al menos nombre y nombre de usuario.'
      });
    }
    
    
    const existingProfile = await Profile.findOne({ accountId: userId });
    
    if (!existingProfile) {
      return res.status(404).json({ 
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil para actualizar'
      });
    }
    
    
    if (existingProfile.nombreUsuario !== nombreUsuario) {
      const existingUsername = await Profile.findOne({ 
        nombreUsuario, 
        _id: { $ne: existingProfile._id } 
      });
      
      if (existingUsername) {
        return res.status(409).json({
          error: "Nombre de usuario ya existe",
          details: "El nombre de usuario ingresado ya se encuentra en uso. Por favor, elige otro."
        });
      }
    }
    
    
    existingProfile.nombre = nombre;
    existingProfile.nombreUsuario = nombreUsuario;
    existingProfile.biografia = biografia || '';
    existingProfile.fotoPerfil = fotoPerfil || '';
    
    await existingProfile.save();
    
    return res.status(200).json({
      message: 'Perfil actualizado con éxito',
      profile: existingProfile
    });
    
  } catch (err) {
    console.log("Error al actualizar el perfil:", err);
    return res.status(500).json({ 
      error: 'Error al actualizar el perfil',
      details: err.message 
    });
  }
};


export const getProfileByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    
    if (!username) {
      return res.status(400).json({
        error: 'Nombre de usuario requerido',
        details: 'Se requiere un nombre de usuario válido.'
      });
    }
    
    
    const perfil = await Profile.findOne({ nombreUsuario: username });
    
    if (!perfil) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: `No se encontró un perfil con el nombre de usuario ${username}.`
      });
    }
    
    
    const seguidores = await Seguidor.countDocuments({ seguidoId: perfil._id });
    const siguiendo = await Seguidor.countDocuments({ seguidorId: perfil._id });
    
    return res.status(200).json({
      ...perfil.toObject(),
      seguidores,
      siguiendo,
      
      accountId: undefined
    });
    
  } catch (err) {
    console.log("Error al obtener perfil por username:", err);
    return res.status(500).json({
      error: 'Error al obtener perfil',
      details: err.message
    });
  }
};


export const deleteProfile = async (req, res) => {
  try {
    const profileId = req.params.id;
    const userId = req.user.id;
    
    console.log("Solicitud para eliminar perfil con ID:", profileId);
    
    if (!profileId) {
      return res.status(400).json({
        error: 'ID de perfil requerido',
        details: 'Se requiere un ID de perfil válido para eliminar.'
      });
    }
    
    
    const profile = await Profile.findById(profileId);
    if (!profile) {
      return res.status(404).json({
        error: 'Perfil no encontrado',
        details: 'No se encontró un perfil con el ID proporcionado.'
      });
    }
    
    
    const account = await Account.findById(userId);
    if (!account || account.perfil_id.toString() !== profileId) {
      return res.status(403).json({
        error: 'Acceso denegado',
        details: 'No tienes permisos para eliminar este perfil.'
      });
    }
    
    
    
    
    
    await Seguidor.deleteMany({ 
      $or: [
        { seguidorId: profileId },
        { seguidoId: profileId }
      ]
    });
    
    
    account.perfil_id = null;
    await account.save();
    
    
    await Profile.findByIdAndDelete(profileId);
    
    return res.status(200).json({
      message: 'Perfil eliminado con éxito'
    });
    
  } catch (err) {
    console.log("Error al eliminar el perfil:", err);
    return res.status(500).json({ 
      error: 'Error al eliminar el perfil',
      details: err.message 
    });
  }
};