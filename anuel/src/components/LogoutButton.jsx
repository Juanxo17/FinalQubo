import { useNavigate } from 'react-router-dom';
import { clearAuthData, fetchWithAuth } from '../utils/auth';
import { API_BASE_URL } from '../utils/config.js';

const LogoutButton = ({ className }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      
      try {
        await fetchWithAuth(`${API_BASE_URL}/api/logout`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        console.error('Error al hacer logout en el servidor:', error);
        
      }
    } finally {
      
      clearAuthData();
      navigate('/login');
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className={className || "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"}
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
