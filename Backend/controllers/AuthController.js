import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {promisify} from 'util'
import  AccountModel  from '../models/AccountModel.js';
import connectDB from '../config/db.js';
import Account from '../models/AccountModel.js';

const db = connectDB();

export const register = async (req,res) =>{
    try{
        const {email,password} = req.body

        if (!email || !password){
            return res.status(400).json({error: 'Faltan datos requeridos.'})

        }

        const existingAccount = await Account.findOne({email});
        if(existingAccount){
            return res.status(409).json({error: 'El email ingresado ya está en uso.'})
        }

        let hashedPass = await bcrypt.hash(password,8)

        const newAccount = new Account ({email,password: hashedPass});
        await newAccount.save();
        res.status(201).json({
            message: 'Cuenta creada con exitacion ohh etsitante',
            accountId: newAccount._id 
        })
    }catch(err){

        console.error(err);
        res.status(500).json({error: 'error al registrar tu cuenta de mierdarul.'})

    }


    


    
}


export const logIn = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).json({ error: 'No se enviaron las credenciales completas.' });
      }
  
      const account = await Account.findOne({ email });
  
      if (!account) {
        return res.status(404).json({ error: 'No pudimos encontrar una cuenta con tu email. Regístrate primero!' });
      }
  
      const isMatch = await bcrypt.compare(password, account.password);
  
      if (!isMatch) {
        return res.status(400).json({ error: 'La contraseña no coincide.' });
      }      const token = jwt.sign(
        { id: account._id, email: account.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
  
      
      const hasProfile = account.perfil_id !== null;
      console.log(" Usuario tiene perfil:", hasProfile ? "Sí" : "No", 
                    hasProfile ? account.perfil_id : "");
  
      
      res.status(200).json({
        message: 'Entraste a Qubo',
        token,
        accountId: account._id,
        perfilId: account.perfil_id || null,
        hasProfile: hasProfile
      });
  
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error interno en el login.' });
    }
  };
  



export const logOut = (req, res) => {
    
    
    
    res.status(200).json({ message: 'Logout exitoso' });
  };
  




