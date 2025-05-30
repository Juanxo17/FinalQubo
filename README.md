# Qubo - Red Social Universitaria

Qubo es una plataforma de red social diseñada específicamente para la comunidad universitaria, que permite a los estudiantes conectarse, compartir contenido, y mantenerse al día con las actividades académicas y sociales de su entorno educativo.

## 📋 Documentacion del Proyecto (esto fue una guía personal para afrontar el proyecto y no perderme mientras lo realizaba, una ruta por así decirlo, hubieron cambios sobre la marcha y se limitaron algunas hu propuestas en el producto final)

https://www.notion.so/Proyecto-estructuras-de-datos-2-1d5ba4801cec80368b6dd0f8a80b0d4d?source=copy_link

## Enlaces de Despliegue

### Frontend (Netlify)
**URL de la aplicación:** https://chipper-salamander-fad813.netlify.app

### Backend (Railway)
**URL del API:** https://finalqubo-production.up.railway.app

### Repositorio GitHub
**URL del repositorio:** https://github.com/Juanxo17/FinalQubo.git

## 👥 Integrantes del Equipo

- **[Juan Felipe Plata Barbosa]** - [Desarrollador]


## Propuesta Gráfica

**Enlace a la propuesta gráfica:** [https://www.figma.com/design/cLdPH17I9btxZftHHucDmk/Qubo?node-id=0-1&t=ARHmB67KEAzi5c83-1]

## Tecnologías Utilizadas

### Frontend
- **React 18** con Vite
- **React Router DOM** para navegación
- **React Bootstrap** para componentes UI
- **Bootstrap Icons** para iconografía
- **date-fns** para manejo de fechas
- **Firebase** para autenticación adicional
- **Vite** servidor de desarrollo

### Backend
- **Node.js** con Express.js
- **MongoDB** con Mongoose para base de datos
- **JWT** para autenticación y autorización
- **Cloudinary** para almacenamiento de imágenes
- **Firebase Admin SDK** para notificaciones push
- **CORS** configurado para múltiples dominios
- **Cookie Parser** para manejo de sesiones

### Base de Datos
- **MongoDB Atlas** 
- **Cloudinary** para almacenamiento de archivos multimedia

### Servicios de Despliegue
- **Frontend:** Netlify
- **Backend:** Railway
- **Base de Datos:** MongoDB Atlas (Cloud)
- **Almacenamiento de Imágenes:** Cloudinary (Cloud)


1. **Clonar el repositorio:**
```bash
git clone https://github.com/Juanxo17/FinalQubo.git
cd FinalQubo/Backend
```

2. **Instalar dependencias:**
```bash
npm install
```


### Frontend Setup

1. **Navegar al directorio frontend:**
```bash
cd ../anuel
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
Crear archivo `.env` en la carpeta anuel:
```env
VITE_API_URL=https://finalqubo-production.up.railway.app
```

4. **Ejecutar en desarrollo:**
```bash
npm run dev
```

5. **Build para producción:**
```bash
npm run build
```


##  API Endpoints

### Autenticación
- `POST /api/login` - Iniciar sesión
- `POST /api/register` - Registrar usuario
- `POST /api/logout` - Cerrar sesión
- `POST /api/firebase-login` - Login con Firebase

### Perfiles
- `GET /api/profile/me` - Obtener perfil propio
- `POST /api/profile` - Crear perfil
- `PUT /api/profile/update` - Actualizar perfil
- `GET /api/profile/username/:username` - Obtener perfil por username

### Publicaciones
- `GET /api/posts` - Obtener feed de publicaciones
- `POST /api/posts` - Crear publicación
- `PUT /api/posts/:id` - Editar publicación
- `DELETE /api/posts/:id` - Eliminar publicación
- `POST /api/posts/:id/like` - Dar/quitar like

### Comentarios
- `GET /api/posts/:id/comments` - Obtener comentarios
- `POST /api/posts/:id/comments` - Crear comentario
- `PUT /api/comments/:id` - Editar comentario
- `DELETE /api/comments/:id` - Eliminar comentario

### Notificaciones
- `GET /api/notifications` - Obtener notificaciones
- `PUT /api/notifications/read-all` - Marcar todas como leídas

## Uso de estructuras de datos
- Uso de linkedList en los slides de creacion de perfil
- Uso de arbol en el sidebar del feed.
