// frontend/src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FirebaseLoginButton from '../components/firebaseLoginbutton'; 
import { saveAuthData } from '../utils/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (loading) return;
    setLoading(true);
    setErrorMsg('');
    
    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const response = await res.json();

      if (!res.ok) {
        setErrorMsg(response.error || 'Error al iniciar sesión');
        setLoading(false);
        return;
      }

      
      saveAuthData(response);

      
      if (response.perfilId) {
        console.log('Usuario ya tiene perfil, redirigiendo al feed');
        navigate('/feed');
      } else {
        
        console.log('Usuario sin perfil, redirigiendo a creación de perfil');
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setErrorMsg('Error al conectar con el servidor');
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 col-xl-4">
          <div className="qubo-auth-container my-4">
            <div className="qubo-auth-header">
              <h2 className="qubo-auth-title">Inicia sesión en Qubo</h2>
              <p className="qubo-auth-subtitle">¡Bienvenido de nuevo!</p>
            </div>
            
            <form className="qubo-auth-form" onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-envelope"></i>
                  </span>
                  <input
                    type="email"
                    id="email"
                    className="form-control" 
                    placeholder="ejemplo@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-lock"></i>
                  </span>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {errorMsg && (
                <div className="alert alert-danger" role="alert">
                  <i className="bi bi-exclamation-triangle-fill me-2"></i>
                  {errorMsg}
                </div>
              )}

              <div className="d-grid mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary ${loading ? 'disabled' : ''}`}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Iniciando sesión...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-box-arrow-in-right me-2"></i>
                      Iniciar sesión
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="qubo-social-login">
              <p className="text-muted mb-3">O continúa con</p>
              <FirebaseLoginButton />
            </div>
            
            <div className="mt-4 text-center">
              <p className="mb-2">¿No tienes una cuenta? <Link to="/register" className="text-primary">Regístrate</Link></p>
              <Link to="/" className="text-decoration-none">
                <i className="bi bi-arrow-left me-1"></i> Volver a inicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
