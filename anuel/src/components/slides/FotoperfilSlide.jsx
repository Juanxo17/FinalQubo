import { useState } from 'react';
import { useProfile } from '../../context/ProfileContext';
import { Form, Button, Alert, Image } from 'react-bootstrap';
import ImageUploader from '../../components/ImageUploader';

const FotoPerfilSlide = ({ onNext, onBack }) => {
  const { updateProfile, profileData } = useProfile();
  const [error, setError] = useState('');
  
  const handleImageUploaded = (imageUrl) => {
    
    updateProfile('fotoPerfil', imageUrl);
  };
  
  const handleNext = () => {
    if (profileData.fotoPerfil) {
      onNext();
    } else {
      
      const confirmed = window.confirm('¿Deseas continuar sin foto de perfil?');
      if (confirmed) {
        onNext();
      } else {
        setError('Por favor sube una foto de perfil para continuar.');
      }
    }
  };

  return (
    <div className="text-center p-4 p-md-5">
      <div className="mb-5">
        <h2 className="fw-bold mb-3" style={{ color: 'var(--qubo-dark)' }}>Sube una foto de perfil</h2>
        <p className="text-muted mb-4">Tu foto se mostrará en tu perfil y publicaciones</p>
          <div className="mx-auto" style={{ maxWidth: '400px', margin: '0 auto' }}>
          {}
          <ImageUploader 
            onImageUploaded={handleImageUploaded} 
            endpoint="/profile/image"
            buttonText="Seleccionar foto de perfil"
            previewSize={150}
            className="mb-4"
          />
          
          {}
          {profileData.fotoPerfil && (
            <div className="mb-4">
              <p className="text-success">
                <i className="bi bi-check-circle me-1"></i>
                Imagen subida correctamente
              </p>
              <Image 
                src={profileData.fotoPerfil} 
                alt="Foto de perfil" 
                roundedCircle 
                className="border border-4 border-white shadow"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            </div>
          )}
          
          {error && (
            <Alert variant="danger" className="mt-3">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              {error}
            </Alert>
          )}
        </div>
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
        <Button          onClick={handleNext} 
          variant="primary" 
          className="qubo-hover-effect px-4 py-2 rounded-pill fw-semibold"
        >
          {profileData.fotoPerfil ? 'Siguiente' : 'Omitir por ahora'}
          <i className="bi bi-arrow-right ms-2"></i>
        </Button>
      </div>
    </div>
  );
};

export default FotoPerfilSlide;
