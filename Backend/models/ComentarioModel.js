import mongoose from 'mongoose';

const ComentarioSchema = new mongoose.Schema({
  perfilId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  publicacionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publicacion',
    required: true,
  },
  contenido: {
    type: String,
    required: true,
    maxlength: 500
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
  editado: {
    type: Boolean,
    default: false
  },
  fechaEdicion: {
    type: Date
  },
  eliminado: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Comentario = mongoose.model('Comentario', ComentarioSchema);

export default Comentario;
