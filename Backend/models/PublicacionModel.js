import mongoose from 'mongoose';

const PublicacionSchema = new mongoose.Schema({
  perfilId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  imagenUrl: {
    type: String,
    default: '',
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  editada: {
    type: Boolean,
    default: false,
  },
  fechaEdicion: {
    type: Date,
  },
  eliminada: {
    type: Boolean,
    default: false,
  },

  contadorMeGusta: {
    type: Number,
    default: 0,
  },
  contadorComentarios: {
    type: Number,
    default: 0,
  },
 
}, { timestamps: true });

const Publicacion = mongoose.model('Publicacion', PublicacionSchema);

export default Publicacion;
