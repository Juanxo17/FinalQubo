import { useProfile } from '../../context/ProfileContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, Alert, Spinner, Card } from 'react-bootstrap';

const FinalSlide = ({ onBack }) => {
  const { profileData } = useProfile();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleSubmit = async () => {
    if (submitting) return; 
    
    setSubmitting(true);
    setErrorMsg('');
    
    try {
      const token = localStorage.getItem('token');
      const accountId = localStorage.getItem('accountId');
      
      if (!token || !accountId) {
        setErrorMsg('No hay sesión activa. Por favor inicia sesión nuevamente.');
        setSubmitting(false);
        return;
      }
      
      
      const profileWithAccountId = {
        ...profileData,
        accountId: accountId
      };
      
      console.log('Enviando datos de perfil:', profileWithAccountId);
      
      const res = await fetch('http://localhost:8080/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(profileWithAccountId),
      });

      const data = await res.json();
      
      if (!res.ok) {
        console.error('Error al crear perfil:', data);
        setErrorMsg(data.error || 'Error al crear el perfil');
        setSubmitting(false);
        return;
      }
      
      console.log('Perfil creado:', data);
      
      if (data.perfilId) {
        localStorage.setItem('perfilId', data.perfilId);
      }
      
      navigate('/feed'); 
    } catch (err) {
      console.error('Error al crear perfil:', err);
      setErrorMsg('Error de conexión con el servidor');
      setSubmitting(false);
    }
  };
  
  return (
    <div className="text-center p-4 p-md-5">      
      <div className="mb-5">
        <div className="d-flex justify-content-center mb-4">
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center qubo-shadow-md"
            style={{ 
              width: '80px', 
              height: '80px', 
              backgroundColor: 'var(--qubo-success)',
              color: 'white'
            }}
          >
            <i className="bi bi-check-lg" style={{ fontSize: '2.5rem' }}></i>
          </div>
        </div>
        
        <h2 className="fw-bold mb-3" style={{ color: 'var(--qubo-dark)' }}>¡Todo listo!</h2>
        <p className="text-muted mb-4">Has completado tu perfil. Puedes comenzar a explorar Qubo.</p>
        
        {}
        <Card className="mb-4 qubo-shadow-md border-0 mx-auto" style={{ maxWidth: '400px', borderRadius: 'var(--qubo-border-radius-md)' }}>
          <Card.Header className="bg-white border-bottom-0 pt-4">
            <div className="text-center position-relative">
              <div 
                className="rounded-circle mx-auto d-flex align-items-center justify-content-center qubo-shadow-sm"
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  backgroundColor: profileData.fotoPerfil ? 'transparent' : 'var(--qubo-secondary)',
                  color: 'white',
                  border: '4px solid white',
                  overflow: 'hidden'
                }}
              >
                {profileData.fotoPerfil ? 
                  <img 
                    src={profileData.fotoPerfil} 
                    alt="Foto de perfil" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  /> : 
                  <span className="fs-4 fw-bold">{profileData.nombre?.charAt(0) || 'Q'}</span>
                }
              </div>
            </div>
          </Card.Header>
          <Card.Body className="text-center">
            <h5 className="fw-bold mb-1">{profileData.nombre || 'Nombre del usuario'}</h5>
            <p className="text-muted mb-2">@{profileData.nombreUsuario || 'username'}</p>
            <p className="small mb-0">{profileData.biografia || 'Biografía del usuario'}</p>
          </Card.Body>
        </Card>
        
        {errorMsg && (
          <Alert variant="danger" className="mx-auto mb-4" style={{ maxWidth: '400px' }}>
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {errorMsg}
          </Alert>
        )}
      </div>
      
      <div className="d-flex justify-content-between" style={{ maxWidth: '400px', margin: '0 auto' }}>        <Button 
          onClick={onBack} 
          variant="light" 
          className="qubo-hover-effect px-4 py-2 rounded-pill"
          disabled={submitting}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Atrás
        </Button>
        <Button 
          onClick={handleSubmit} 
          variant="success" 
          className="qubo-hover-effect px-4 py-2 rounded-pill fw-semibold"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
              Procesando...
            </>
          ) : (
            <>
              Finalizar y continuar
              <i className="bi bi-arrow-right ms-2"></i>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default FinalSlide;
