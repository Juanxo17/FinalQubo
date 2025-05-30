import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';


dotenv.config();


if (!process.env.CLOUDINARY_NAME || !process.env.CLOUDINARY_API || !process.env.CLOUDINARY_SECRET) {
  console.warn('⚠️ Variables de entorno de Cloudinary no configuradas. Las imágenes no funcionarán correctamente.');
}
       

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || 'demo', 
  api_key: process.env.CLOUDINARY_API || '123456789012345',
  api_secret: process.env.CLOUDINARY_SECRET || 'abcdefghijklmnopqrstuvwxyz12'
});

export default cloudinary;