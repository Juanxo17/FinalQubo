import mongoose from 'mongoose';

const notificacionSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true
  },
  tipo: {
    type: String,
    enum: ['like', 'comment', 'follow'],
    required: true
  },
  remitente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile'
  },
  objetoId: {
    type: mongoose.Schema.Types.ObjectId,
    refPath: 'tipoObjeto'
  },
  tipoObjeto: {
    type: String,
    enum: ['Publicacion', 'Comentario', 'Profile']
  },
  mensaje: {
    type: String,
    required: true
  },
  leida: {
    type: Boolean,
    default: false
  },
  fecha: {
    type: Date,
    default: Date.now
  }
});

const Notificacion = mongoose.model('Notificacion', notificacionSchema);

export default Notificacion;