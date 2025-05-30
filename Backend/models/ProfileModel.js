import mongoose from 'mongoose';

const ProfileSchema  = new mongoose.Schema({

    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true
      },

      nombre:{
        type: String,
        required: true
    },

    nombreUsuario:{
        type: String,
        required: true,
        unique: true
    },
    
    biografia: {
        type: String,
        default: ''
    },



    fotoPerfil: {
        type: String,
        default: ''
    },

   
    creado_en: {
        type: Date,
        default: Date.now
    },

    actualizado_en: {
        type: Date,
        default: Date.now
    },

    sitioWeb: {
        type: String,
        default: ''
    },
   

});

const Profile = mongoose.model('Profile', ProfileSchema);


export default Profile;