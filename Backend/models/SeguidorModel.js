import mongoose from 'mongoose';

const SeguidorSchema = new mongoose.Schema({
  seguidorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  seguidoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Profile',
    required: true,
  },
  fecha: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const Seguidor = mongoose.model('Seguidor', SeguidorSchema);

export default Seguidor;
