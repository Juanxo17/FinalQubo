import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SlideManager from "../components/slides/SlideManager";

const CreateProfile = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkProfile = async () => {
      const token = localStorage.getItem('token');
      const accountId = localStorage.getItem('accountId');
      
      if (!token || !accountId) {
        
        navigate('/login');
        return;
      }
      
      try {
        
        const res = await fetch(`http://localhost:8080/check-profile`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const data = await res.json();
        
        if (!res.ok) {
          console.error('Error verificando perfil:', data);
          setError(data.error || 'Error al verificar tu perfil');
          setLoading(false);
          return;
        }
        
        if (data.hasProfile) {
          
          console.log('Usuario ya tiene perfil, redirigiendo al feed');
          navigate('/feed');
          return;
        }
        
        
        setLoading(false);
        
      } catch (error) {
        console.error('Error al verificar perfil:', error);
        setError('Error de conexión con el servidor');
        setLoading(false);
      }
    };
    
    checkProfile();
  }, [navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Verificando perfil...</div>;
  }
  
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver al inicio de sesión
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SlideManager />
    </div>
  );
};

export default CreateProfile;
