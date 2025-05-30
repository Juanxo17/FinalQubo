import { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { Form, Button, Alert } from 'react-bootstrap';

const BiografiaSlide = ({ onNext, onBack }) => {
  const { updateProfile } = useProfile();
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');
  
  const handleNext = () => {
    if (bio.trim()) {
      updateProfile('biografia', bio);
      setError('');
      onNext();
    } else {
      setError('Por favor escribe una biografía.');
    }
  };

  return (
    <div className="text-center p-4 p-md-5">
      <div className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--qubo-dark)' }}>Escribe una biografía corta</h2>
        <p className="text-muted mb-4">¡Cuéntale al mundo un poco sobre ti!</p>
        
        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Me encanta la tecnología, los videojuegos y..."
            className="qubo-shadow-sm"
            style={{ 
              maxWidth: '400px', 
              margin: '0 auto', 
              borderRadius: 'var(--qubo-border-radius-md)' 
            }}
          />
          <Form.Text className="text-muted d-block mt-2">
            Máximo 160 caracteres
          </Form.Text>
          {error && (
            <Alert variant="danger" className="mt-3 mx-auto" style={{ maxWidth: '400px' }}>
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {error}
            </Alert>
          )}
        </Form.Group>
      </div>

      <div className="d-flex justify-content-between" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Button 
          onClick={onBack} 
          variant="light" 
          className="qubo-hover-effect px-4 py-2 rounded-pill"
        >
          <i className="bi bi-arrow-left me-2"></i>
          Atrás
        </Button>
        <Button 
          onClick={handleNext} 
          variant="primary" 
          className="qubo-hover-effect px-4 py-2 rounded-pill fw-semibold"
        >
          Siguiente
          <i className="bi bi-arrow-right ms-2"></i>
        </Button>
      </div>
    </div>
  );
};

export default BiografiaSlide;
