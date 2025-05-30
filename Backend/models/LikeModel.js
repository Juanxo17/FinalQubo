import mongoose from 'mongoose';

const MeGustaSchema = new mongoose.Schema({
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
  fecha: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const MeGusta = mongoose.model('MeGusta', MeGustaSchema);

export default MeGusta;
