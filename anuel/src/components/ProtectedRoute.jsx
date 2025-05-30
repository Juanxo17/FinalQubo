import { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const ProtectedRoute = ({ children, requireProfile = false }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          setLoading(false);
          return;
        }
        
        if (requireProfile) {
          try {
            const res = await fetch('http://localhost:8080/check-profile', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
            
            if (!res.ok) {
              const errorData = await res.json();
              console.error('Error verificando perfil:', errorData);
              setError('Error al verificar tu perfil');
              setLoading(false);
              return;
            }
            
            const data = await res.json();
            setHasProfile(data.hasProfile);
            
            
            if (data.hasProfile && data.perfilId) {
              localStorage.setItem('perfilId', data.perfilId);
            }
          } catch (error) {
            console.error('Error verificando perfil:', error);
            setError('Error de conexión al verificar tu perfil');
            setLoading(false);
            return;
          }
        }
        
        setAuthenticated(true);
        setLoading(false);
      } catch (err) {
        console.error('Error en ProtectedRoute:', err);
        setError('Error inesperado');
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [requireProfile, location.pathname]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p>Verificando acceso...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-md">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
        <button 
          onClick={() => {
            localStorage.removeItem('token');
            localStorage.removeItem('accountId');
            localStorage.removeItem('perfilId');
            window.location.href = '/login';
          }}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver al inicio de sesión
        </button>
      </div>
    );
  }
  
  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  if (requireProfile && !hasProfile) {
    return <Navigate to="/profile" state={{ from: location }} replace />;
  }
  
  
  return children;
};

export default ProtectedRoute;
