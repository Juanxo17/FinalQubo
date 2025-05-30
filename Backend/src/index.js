import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import router from '../Routes/router.js'
import connectDB from '../config/db.js'
import cors from 'cors';

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Conectar a la base de datos
connectDB();

// Configurar CORS para producción y desarrollo
app.use(cors({
  origin: [
    'http://localhost:5173', 
    'http://localhost:3000',
    // Agrega aquí tu URL de Netlify cuando la tengas
    process.env.FRONTEND_URL,
    'https://tu-app.netlify.app' // Reemplaza con tu URL real de Netlify
  ], 
  credentials: true 
}));

app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Ruta básica para verificar que funciona
app.get('/', (req, res) => {
  res.json({ message: 'Backend funcionando correctamente!' });
});

// Usar el router para otras rutas
app.use('/api', router)

// Para Vercel, exportar la app
export default app;

// Para desarrollo local
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
  });
}