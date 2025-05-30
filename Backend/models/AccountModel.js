import mongoose from 'mongoose';

const AccountSchema  = new mongoose.Schema({

    email:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
        required: false
    },    proveedor: {
        type: String,
        enum: ['local', 'firebase', 'local+firebase'],
        default: 'local'
    },

    firebaseUid: {
        type: String,
        default: null
    },

    creado_en: {
        type: Date,
        default: Date.now
    },

    perfil_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Perfil',
        default: null
    }

});

const Account = mongoose.model('Account', AccountSchema);


export default Account;