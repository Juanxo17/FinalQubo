import mongoose from 'mongoose';

const ConfiguracionUsuarioSchema = new mongoose.Schema({
  perfilId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  
  recibirNotificaciones: {
    type: Boolean,
    default: true,
  }
  
}, { timestamps: true });

const ConfiguracionUsuario = mongoose.model('ConfiguracionUsuario', ConfiguracionUsuarioSchema);

export default ConfiguracionUsuario;
