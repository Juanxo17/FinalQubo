// Datos del menú para construir el árbol de navegación
export const menuItems = {
  id: 'root',
  nombre: 'Raíz',
  children: [
    {
      id: 'feed',
      nombre: 'Feed',
      ruta: '/feed',
      icono: 'FeedIcon'
    },
    {
      id: 'perfil',
      nombre: 'Perfil',
      icono: 'UserIcon', 
      expandible: true,
      children: [        {
          id: 'verPerfil',
          nombre: 'Ver Perfil',
          ruta: '/view-profile',
          icono: 'ViewIcon'
        },
        {
          id: 'misPosts',
          nombre: 'Mis Publicaciones',
          ruta: '/profile-posts',
          icono: 'PostsIcon'
        },
        {
          id: 'editarPerfil',
          nombre: 'Actualizar Perfil',
          ruta: '/edit-profile',
          icono: 'EditIcon'
        },
        {
          id: 'eliminarPerfil',
          nombre: 'Eliminar Perfil',
          ruta: '/delete-profile',
          icono: 'DeleteIcon'
        }
      ]
    },
    {
      id: 'sesion',
      nombre: 'Sesión',
      icono: 'LockIcon',
      expandible: true,
      children: [
        {
          id: 'cerrarSesion',
          nombre: 'Cerrar Sesión',
          accion: 'logout', 
          icono: 'LogoutIcon'
        }
      ]
    }
  ]
};


export const construirArbolMenu = (Arbol, datos) => {
  const arbol = new Arbol();
  
  
  arbol.insertar(datos);
  
  
  const insertarHijos = (item, padre) => {
    if (item.children && item.children.length > 0) {
      for (const hijo of item.children) {
        arbol.insertar(hijo, padre);
        insertarHijos(hijo, hijo);
      }
    }
  };
  
  
  insertarHijos(datos, datos);
  
  return arbol;
};
