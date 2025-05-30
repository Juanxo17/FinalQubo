import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Arbol } from '../utils/Arbol';
import { menuItems, construirArbolMenu } from '../utils/MenuData';

const TreeNavigation = () => {
  const [arbolMenu, setArbolMenu] = useState(null);
  const [expandidos, setExpandidos] = useState({});
  const navigate = useNavigate();

  
  useEffect(() => {
    const nuevoArbol = construirArbolMenu(Arbol, menuItems);
    setArbolMenu(nuevoArbol);
    
    
    setExpandidos({ perfil: true });
  }, []);

  
  const handleItemClick = (item) => {
    
    if (item.accion === 'logout') {
      
      localStorage.removeItem('token');
      localStorage.removeItem('accountId');
      navigate('/login');
      return;
    }
    
    
    if (item.expandible) {
      setExpandidos(prev => ({
        ...prev,
        [item.id]: !prev[item.id]
      }));
      return;
    }
    
    
    if (item.ruta) {
      navigate(item.ruta);
    }
  };  
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'UserIcon':
        return <i className="bi bi-person fs-5"></i>;
      case 'ViewIcon':
        return <i className="bi bi-eye fs-5"></i>;
      case 'EditIcon':
        return <i className="bi bi-pencil-square fs-5"></i>;
      case 'DeleteIcon':
        return <i className="bi bi-trash fs-5"></i>;
      case 'LockIcon':
        return <i className="bi bi-lock fs-5"></i>;
      case 'LogoutIcon':
        return <i className="bi bi-box-arrow-right fs-5"></i>;
      case 'FeedIcon':
        return <i className="bi bi-house-door-fill fs-5"></i>;
      case 'PostsIcon':
        return <i className="bi bi-file-text-fill fs-5"></i>;
      default:
        return null;
    }
  };

  
  const renderTreeNode = (nodo, nivel = 0) => {
    if (!nodo) return null;
    
    const item = nodo.valor;
    const tieneHijos = nodo.hijos && nodo.hijos.length > 0;
    const esExpandible = item.expandible;
    const estaExpandido = expandidos[item.id];
    
    
    if (item.id === 'root') {
      return (
        <div key={item.id}>
          {nodo.hijos.map(hijo => renderTreeNode(hijo, nivel))}
        </div>
      );
    }
    
    return (
      <div key={item.id} className="mb-2">      <button
          onClick={() => handleItemClick(item)}
          className={`btn w-100 text-start d-flex align-items-center p-3 rounded-pill mb-1 qubo-hover-effect ${
            esExpandible 
              ? 'fw-semibold' 
              : 'text-decoration-none'
          }`}
          style={{
            background: esExpandible ? 'var(--qubo-light)' : 'transparent',
            color: window.location.pathname === item.ruta ? 'var(--qubo-primary)' : 'var(--qubo-dark)'
          }}
        >
          <span className="me-3" style={{ color: window.location.pathname === item.ruta ? 'var(--qubo-primary)' : 'var(--qubo-gray-dark)' }}>
            {renderIcon(item.icono)}
          </span>
          <span className="flex-grow-1 text-start">{item.nombre}</span>
          {esExpandible && (
            <span className={`transition ${estaExpandido ? 'rotate-180' : ''}`}>
              <i className="bi bi-chevron-down"></i>
            </span>
          )}
        </button>
          {tieneHijos && esExpandible && estaExpandido && (
          <div className="ms-4 mt-2 ps-3 border-start" style={{ borderColor: 'var(--qubo-gray-light)' }}>
            {nodo.hijos.map(hijo => renderTreeNode(hijo, nivel + 1))}
          </div>
        )}
      </div>
    );
  };
  
  if (!arbolMenu) {
    return <div className="p-4 text-center">
      <div className="spinner-border spinner-border-sm" style={{ color: 'var(--qubo-primary)' }} role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <p className="mt-2" style={{ color: 'var(--qubo-gray-dark)' }}>Cargando menú...</p>
    </div>;
  }

  return (
    <div className="py-2">
      {renderTreeNode(arbolMenu.raiz)}
    </div>
  );
};

export default TreeNavigation;
