import multer from 'multer';
import cloudinary from '../config/cloudinary.js';
import { Readable } from 'stream';


const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, 
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Solo se permiten imágenes'), false);
    }
    cb(null, true);
  }
});


export const uploadImageToCloudinary = async (file, folder = 'general') => {
  return new Promise((resolve, reject) => {
    
    const stream = Readable.from(file.buffer);
    
    
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: `qubo/${folder}` },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    
    
    stream.pipe(uploadStream);
  });
};

export default upload;