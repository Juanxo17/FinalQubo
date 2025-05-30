import { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { Form, Button, Alert } from 'react-bootstrap';

const NombreSlide = ({ onNext, onBack }) => {
  const { updateProfile } = useProfile();
  const [nombre, setNombre] = useState('');
  const [error, setError] = useState('');
  
  const handleNext = () => {
    if (nombre.trim()) {
      updateProfile('nombre', nombre);
      setError('');
      onNext();
    } else {
      setError('Por favor ingresa tu nombre.');
    }
  };

  return (
    <div className="text-center p-4 p-md-5">
      <div className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--qubo-dark)' }}>¿Cuál es tu nombre?</h2>
        <p className="text-muted mb-4">Este nombre se mostrará en tu perfil público</p>
        
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ej. Juan Pérez"
            className="form-control-lg qubo-shadow-sm"
            style={{ 
              maxWidth: '400px', 
              margin: '0 auto', 
              borderRadius: 'var(--qubo-border-radius-md)' 
            }}
          />
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

export default NombreSlide;
