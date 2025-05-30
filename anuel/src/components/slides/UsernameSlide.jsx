import { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { Form, Button, Alert, InputGroup } from 'react-bootstrap';

const UsernameSlide = ({ onNext, onBack }) => {
  const { updateProfile } = useProfile();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  
  const handleNext = () => {
    if (username.trim()) {
      updateProfile('nombreUsuario', username);
      setError('');
      onNext();
    } else {
      setError('Por favor elige un nombre de usuario.');
    }
  };

  return (
    <div className="text-center p-4 p-md-5">
      <div className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--qubo-dark)' }}>Crea tu nombre de usuario</h2>
        <p className="text-muted mb-4">Este es el nombre que los demás usarán para mencionarte</p>
        
        <Form.Group className="mb-4">
          <InputGroup 
            className="qubo-shadow-sm"
            style={{ 
              maxWidth: '400px', 
              margin: '0 auto', 
              borderRadius: 'var(--qubo-border-radius-md)' 
            }}
          >
            <InputGroup.Text style={{ backgroundColor: 'var(--qubo-light)' }}>@</InputGroup.Text>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="tu_usuario"
              className="form-control-lg"
            />
          </InputGroup>
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

export default UsernameSlide;
