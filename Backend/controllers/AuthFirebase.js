// controllers/firebaseAuthController.js
import adminAuth from '../config/firebase.js';
import jwt from 'jsonwebtoken';
import Account from '../models/AccountModel.js';

export const loginWithFirebase = async (req, res) => {
  const { idToken } = req.body;

  if (!idToken) {
    return res.status(400).json({ error: 'No se proporcionó el token de Firebase.' });
  }

 try {
  const decodedToken = await adminAuth.verifyIdToken(idToken);
  const { email, uid } = decodedToken;
  console.log("Email recibido:", email);
  console.log("UID Firebase:", uid);
  let account = await Account.findOne({ email });

  if (!account) {
    console.log("No se encontró cuenta, creando nueva...");
    account = new Account({
      email,
      password: '', 
      proveedor: 'firebase',
      firebaseUid: uid,
    });
    await account.save();
    console.log("Nueva cuenta creada:", account);
  } else {
    console.log("Cuenta ya existente:", account);
    
    
    if (!account.firebaseUid) {
      console.log("Actualizando cuenta local con firebaseUid...");
      account.firebaseUid = uid;
      account.proveedor = 'local+firebase'; 
      await account.save();
      console.log("Cuenta actualizada con firebaseUid");
    }
  }
  const token = jwt.sign(
    { id: account._id, email: account.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN },
    
  );

  
  const hasProfile = account.perfil_id !== null;  console.log("Usuario tiene perfil:", hasProfile ? "Sí" : "No", 
              hasProfile ? account.perfil_id : "");

  res.status(200).json({
    message: 'Login con Firebase exitoso',
    token,
    accountId: account._id,
    perfilId: account.perfil_id || null,
    hasProfile: hasProfile
  });
} catch (err) {
  console.error('Error al verificar token o guardar cuenta:', err);
  res.status(401).json({ error: 'Token de Firebase inválido o error de base de datos' });
}
}