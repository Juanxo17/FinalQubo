import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [checking, setChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserStatus = async () => {
      const token = localStorage.getItem('token');
      const accountId = localStorage.getItem('accountId');

      if (token && accountId) {
        try {
          
          const res = await fetch('http://localhost:8080/check-profile', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (res.ok) {
            const data = await res.json();
            if (data.hasProfile) {
              
              navigate('/feed');
              return;
            } else {
              
              navigate('/profile');
              return;
            }
          }
        } catch (error) {
          console.error('Error al verificar estado del usuario:', error);
        }
      }
      
      setChecking(false);
    };

    checkUserStatus();
  }, [navigate]);

  if (checking) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Verificando sesión...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-5">
          <div className="qubo-auth-container my-5">
            <div className="qubo-auth-header">
              <h1 className="qubo-auth-title display-4 text-primary fw-bold">Qubo</h1>
              <p className="qubo-auth-subtitle">Tu red para compartir ideas, proyectos y conexiones reales.</p>
            </div>
            
            <div className="text-center mb-4">
              <img 
                src="/user-default.svg" 
                alt="Qubo Logo" 
                className="img-fluid mb-4" 
                style={{ maxWidth: '120px', opacity: '0.8' }}
              />
            </div>
            
            <div className="d-grid gap-3 mb-4">
              <Link to="/register" className="text-decoration-none">
                <button className="btn btn-primary w-100 qubo-hover-effect">
                  <i className="bi bi-person-plus me-2"></i>
                  ¡Regístrate!
                </button>
              </Link>
              
              <Link to="/login" className="text-decoration-none">
                <button className="btn btn-outline-primary w-100 qubo-hover-effect">
                  <i className="bi bi-box-arrow-in-right me-2"></i>
                  Inicia sesión
                </button>
              </Link>
            </div>
            
            <div className="text-center text-muted mt-4">
              <p className="small">© 2025 Qubo - Todos los derechos reservados</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
