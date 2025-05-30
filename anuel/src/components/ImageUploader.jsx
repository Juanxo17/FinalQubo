import React, { useState } from 'react';
import { Button, Spinner, Image, Alert } from 'react-bootstrap';
import { API_BASE_URL, MAX_UPLOAD_SIZE } from '../utils/config.js';


const ImageUploader = ({ 
  onImageUploaded,
  endpoint = '/profile/image',
  buttonText = 'Seleccionar imagen',
  className = '',
  showPreview = true,
  previewSize = 150,
  id = 'imageInput' + Math.random().toString(36).substring(2, 9) 
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    
    if (!file.type.startsWith('image/')) {
      setError('Por favor selecciona un archivo de imagen válido');
      return;
    }
      
    if (file.size > MAX_UPLOAD_SIZE) {
      setError(`La imagen no debe exceder ${MAX_UPLOAD_SIZE / (1024 * 1024)}MB`);
      return;
    }
    
    setSelectedFile(file);
    setError('');
    
    
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };
  
  const handleUpload = async () => {
    if (!selectedFile) return;
    
    setLoading(true);
    setError('');
    
    const formData = new FormData();
    formData.append('image', selectedFile);
    
    try {
      const token = localStorage.getItem('token');
        console.log(`Enviando imagen a: ${API_BASE_URL}${endpoint}`);
      
      const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });
      
      
      const contentType = res.headers.get('content-type');
      console.log('Tipo de contenido de respuesta:', contentType);
      
      let data;
      
      
      if (!res.ok) {
        console.error(`Error del servidor: ${res.status} ${res.statusText}`);
        
        if (!contentType || !contentType.includes('application/json')) {
          const text = await res.text();
          console.error('Respuesta no es JSON:', text);
          throw new Error(`Error ${res.status}: La respuesta del servidor no es válida`);
        } else {
          data = await res.json();
          throw new Error(data.error || `Error ${res.status} al subir la imagen`);
        }
      }
      
      
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text();
        console.error('Respuesta exitosa pero no es JSON:', text);
        throw new Error('El servidor devolvió una respuesta no válida');
      }
      
      data = await res.json();
      console.log('Imagen subida correctamente:', data);
      
      
      if (onImageUploaded) {
        onImageUploaded(data.imageUrl);
      }
        } catch (err) {
      console.error('Error al subir imagen:', err);
      
      if (err.message.includes('no es válida') || err.message.includes('no válido')) {
        setError('Error de comunicación con el servidor. Verifica tu conexión e inténtalo nuevamente.');
      } else if (err.message.includes('Error 401')) {
        setError('Error de autenticación. Intenta iniciar sesión nuevamente.');
      } else if (err.message.includes('Error 413')) {
        setError('La imagen es demasiado grande. Intenta con una imagen más pequeña.');
      } else {
        setError('No se pudo subir la imagen: ' + (err.message || 'Error desconocido'));
      }
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={className}>
      {}
      {showPreview && preview && (
        <div className="mb-3 text-center">
          <Image 
            src={preview} 
            alt="Vista previa" 
            style={{ 
              width: `${previewSize}px`, 
              height: `${previewSize}px`,
              objectFit: 'cover'
            }} 
            className="rounded"
          />
        </div>
      )}
      
      {}      <div className="d-flex flex-column">        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="form-control mb-2"
          id={id}
        />
        {selectedFile && (
          <Button
            onClick={handleUpload}
            disabled={loading}
            variant="primary"
            className="mb-2"
          >
            {loading ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" className="me-2" />
                Subiendo...
              </>
            ) : (
              'Subir imagen'
            )}
          </Button>
        )}
        
        {}
        {error && (
          <Alert variant="danger" className="mt-2 mb-0">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </Alert>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
