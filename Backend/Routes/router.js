import express from 'express'
import { register, logIn, logOut } from '../controllers/AuthController.js';
import { createProfile, checkProfile, getMyProfile, updateProfile, getProfileByUsername, deleteProfile } from '../controllers/ProfileController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { loginWithFirebase } from '../controllers/AuthFirebase.js';
import {
  createPost, 
  getPostById, 
  getFeedPosts, 
  getProfilePosts, 
  updatePost, 
  deletePost, 
  getMyPosts 
} from '../controllers/PublicacionController.js';
import {
  createComment,
  getPostComments,
  updateComment,
  deleteComment
} from '../controllers/ComentarioController.js';
import {
  toggleLike,
  checkLike,
  getLikes
} from '../controllers/LikeController.js';
import { toggleFollow, getFollowers, getFollowing, checkFollow } from '../controllers/SeguidorController.js';
import { 
  getUserUnreadNotifications, 
  getUserAllNotifications,
  markAsRead,
  removeNotification,
  markAllAsRead
} from '../controllers/NotificacionController.js';

import upload, {uploadImageToCloudinary} from '../middlewares/fileUpload.js';

const router = express.Router()


router.post('/profile/image', verifyToken, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Archivo no proporcionado' });
    }
    
    const imageUrl = await uploadImageToCloudinary(req.file, 'profiles');
    
    res.status(200).json({ success: true, imageUrl });  } catch (error) {
    console.error('Error al subir imagen:', error);
    res.status(500).json({ error: 'Error al procesar la imagen' });
  }
});


router.post('/posts/image', verifyToken, upload.single('image'), async (req, res) => {  try {
    console.log('Recibida solicitud de subida de imagen para post');
    
    if (!req.file) {
      console.log(' No se recibió ningún archivo en la solicitud');
      return res.status(400).json({ error: 'Archivo no proporcionado' });
    }
    
    console.log(`📷 Archivo recibido: ${req.file.originalname} (${req.file.size} bytes, ${req.file.mimetype})`);
    
    const imageUrl = await uploadImageToCloudinary(req.file, 'posts');
    console.log(`✅ Imagen subida exitosamente a Cloudinary: ${imageUrl}`);
    
    res.status(200).json({ success: true, imageUrl });
  } catch (error) {
    console.error('❌ Error al subir imagen para publicación:', error);
    res.status(500).json({ error: 'Error al procesar la imagen: ' + error.message });  }
});

// Comentada para evitar conflicto con la ruta raíz de index.js
// router.get('/', (req, res ) => res.send('<h1>Hablamelo</h1>'));

router.get('/protected', (req,res)=> {

})

router.post('/login',logIn)

router.post('/register', register);

router.post('/logout', logOut)

router.post('/profile',verifyToken,createProfile);

router.get('/check-profile', verifyToken, checkProfile);

router.get('/profile/me', verifyToken, getMyProfile);

router.get('/profile/username/:username', verifyToken, getProfileByUsername);

router.put('/profile/update', verifyToken, updateProfile);

router.delete('/profile/:id', verifyToken, deleteProfile);

router.post('/firebase-login', loginWithFirebase)


router.post('/posts', verifyToken, createPost);
router.get('/posts', verifyToken, getFeedPosts);
router.get('/posts/my', verifyToken, getMyPosts);
router.get('/posts/:id', verifyToken, getPostById);
router.get('/profile/:profileId/posts', verifyToken, getProfilePosts);
router.put('/posts/:id', verifyToken, updatePost);
router.delete('/posts/:id', verifyToken, deletePost);


router.post('/posts/:id/comments', verifyToken, createComment);
router.get('/posts/:id/comments', verifyToken, getPostComments);
router.put('/comments/:id', verifyToken, updateComment);
router.delete('/comments/:id', verifyToken, deleteComment);


router.post('/posts/:postId/like', verifyToken, toggleLike);
router.get('/posts/:postId/like', verifyToken, checkLike);
router.get('/posts/:postId/likes', verifyToken, getLikes);


router.post('/profile/:profileId/follow', verifyToken, toggleFollow);
router.get('/profile/:profileId/follow', verifyToken, checkFollow);
router.get('/profile/:profileId/followers', verifyToken, getFollowers);
router.get('/profile/:profileId/following', verifyToken, getFollowing);


// Rutas de notificaciones
router.get('/notifications/unread', verifyToken, getUserUnreadNotifications);
router.get('/notifications', verifyToken, getUserAllNotifications);
router.put('/notifications/:notificationId/read', verifyToken, markAsRead);
router.put('/notifications/read-all', verifyToken, markAllAsRead);
router.delete('/notifications/:notificationId', verifyToken, removeNotification);

export default router;