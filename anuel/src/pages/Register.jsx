import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FirebaseLoginButton from '../components/firebaseLoginbutton';
import { saveAuthData } from '../utils/auth';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
 
    if (password !== confirmPassword) {
      setErrorMsg('Las contraseñas no coinciden');
      return;
    }
    
    if (password.length < 6) {
      setErrorMsg('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    
    if (loading) return;
    setLoading(true);
    setErrorMsg('');
    
    try {
      const res = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const response = await res.json();

      if (!res.ok) {
        setErrorMsg(response.error || 'Error al registrarse');
        setLoading(false);
        return;
      }

      
      saveAuthData(response);

      
      navigate('/profile');
      
    } catch (error) {
      console.error('Error al registrarse:', error);
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
              <h2 className="qubo-auth-title">Crear una cuenta</h2>
              <p className="qubo-auth-subtitle">Únete a Qubo hoy mismo</p>
            </div>
            
            <form className="qubo-auth-form" onSubmit={handleRegister}>
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
                    placeholder="Crea una contraseña segura"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-text">
                  La contraseña debe tener al menos 6 caracteres
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="bi bi-shield-lock"></i>
                  </span>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Repite la contraseña"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                      Creando cuenta...
                    </>
                  ) : (
                    <>
                      <i className="bi bi-person-plus me-2"></i>
                      Registrarse
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="qubo-social-login">
              <p className="text-muted mb-3">O regístrate con</p>
              <FirebaseLoginButton />
            </div>
            
            <div className="mt-4 text-center">
              <p className="mb-2">¿Ya tienes una cuenta? <Link to="/login" className="text-primary">Inicia sesión</Link></p>
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

export default Register;
