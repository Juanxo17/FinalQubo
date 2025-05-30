// Este archivo es solo para depuración y mostrará todas las rutas registradas en la aplicación

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from '../Routes/router.js';
import connectDB from '../config/db.js';


const app = express();
const PORT = 8080;


dotenv.config();
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


connectDB();


console.log('\n--- RUTAS REGISTRADAS EN EXPRESS ---');
console.log('Rutas en el router principal:');
router.stack.forEach(layer => {
  if (layer.route) {
    const path = layer.route.path;
    const methods = Object.keys(layer.route.methods)
      .filter(method => layer.route.methods[method])
      .join(', ')
      .toUpperCase();
    console.log(`${methods} ${path}`);
  }
});
console.log('-----------------------------------\n');


app.use('/', router);


app.use((req, res, next) => {
  console.log(`404 - Ruta no encontrada: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: 'Ruta no encontrada', path: req.originalUrl });
});


app.listen(PORT, () => {
  console.log(`Servidor iniciado en puerto: ${PORT}`);
  console.log(`API disponible en: http://localhost:${PORT}`);
});
