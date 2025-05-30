import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert, Spinner } from 'react-bootstrap';
import { fetchWithAuth } from '../utils/auth';
import ImageUploader from './ImageUploader';

const CreatePostInput = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showImageUploader, setShowImageUploader] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) return;
    
    setIsPosting(true);
    setError('');
    
    try {
      
      const postData = {
        contenido: content,
        imagenUrl: imageUrl
      };
        
      const res = await fetchWithAuth('/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al crear la publicación');
      }
      
      
      const responseData = await res.json();
        
      setContent('');
      setImageUrl('');
      setShowImageUploader(false);
      
      
      if (onPostCreated && responseData.publicacion) {
        onPostCreated(responseData.publicacion);
      }
    } catch (error) {
      console.error('Error al crear publicación:', error);
      setError(error.message || 'No se pudo crear la publicación. Intente nuevamente.');
      
      
      
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        console.log('Simulando creación de publicación en modo offline');
          
        setContent('');
        setImageUrl('');
        setShowImageUploader(false);
        
        
        if (onPostCreated) {
          onPostCreated({
            _id: Date.now().toString(),
            contenido: content,
            imagenUrl: imageUrl,
            fechaCreacion: new Date().toISOString(),
            contadorMeGusta: 0,
            contadorComentarios: 0,
            perfil: {
              nombre: 'Usuario Actual',
              nombreUsuario: 'qubouser',
              fotoPerfil: ''
            }
          });
        }
      }
    } finally {
      setIsPosting(false);
    }
  };
    const toggleImageUploader = () => {
    setShowImageUploader(!showImageUploader);
    if (showImageUploader) {
      setImageUrl('');
    }
  };
    const handleImageUploaded = (url) => {
    console.log('Imagen subida correctamente, URL recibida:', url);
    setImageUrl(url);
    setShowImageUploader(false);
  };
  
  return (    <Card className="qubo-post mb-4 border-light">
      <Card.Body className="p-4">
        {error && (
          <Alert variant="danger" className="mb-3">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            {error}
          </Alert>
        )}
        
        <Form onSubmit={handleSubmit}>
          <Row className="align-items-start mb-3">            <Col xs="auto" className="pe-0">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                <span className="fs-5 text-primary fw-bold">Q</span>
              </div>
            </Col>
            <Col>
              <Form.Group>
                <Form.Control 
                  as="textarea" 
                  placeholder="¿Qué estás pensando?"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={3}
                  className="border-0 ps-0 shadow-none"
                  style={{ resize: 'none' }}
                />
              </Form.Group>
                {}
              {showImageUploader && !imageUrl && (
                <Form.Group className="mt-2">
                  <ImageUploader 
                    onImageUploaded={handleImageUploaded}
                    endpoint="/posts/image"
                    buttonText="Seleccionar imagen"
                    previewSize={200}
                  />
                </Form.Group>
              )}
              
              {}
              {imageUrl && (
                <div className="mt-2 border rounded p-2 bg-light">
                  <div className="position-relative">
                    <img 
                      src={imageUrl} 
                      alt="Vista previa" 
                      className="img-fluid rounded" 
                      style={{ maxHeight: '200px', objectFit: 'cover', width: '100%' }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/300x200?text=Error+de+imagen';
                      }}
                    />
                    <Button
                      variant="light"
                      size="sm"
                      className="position-absolute top-0 end-0 m-2 rounded-circle"
                      onClick={() => setImageUrl('')}
                      style={{ width: '30px', height: '30px', padding: '0' }}
                    >
                      <i className="bi bi-x"></i>
                    </Button>
                  </div>
                </div>
              )}
            </Col>
          </Row>
            <div className="d-flex justify-content-between align-items-center">
            <div>              <Button 
                variant="link" 
                className="text-decoration-none p-1 text-primary"
                onClick={toggleImageUploader}
                type="button"
                disabled={isPosting}
              >
                <i className={`bi ${showImageUploader ? 'bi-x-circle' : 'bi-image'} fs-5`}></i>
                {showImageUploader && <span className="ms-1 small">Cancelar imagen</span>}
                {imageUrl && <span className="ms-1 small">Cambiar imagen</span>}
              </Button>
            </div>
            <Button 
              type="submit"
              variant="primary" 
              className="rounded-pill px-4 qubo-hover-effect"
              disabled={(!content.trim() && !imageUrl) || isPosting}
            >
              {isPosting ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                  Publicando...
                </>
              ) : (
                <>
                  <i className="bi bi-send-fill me-2"></i>
                  Publicar
                </>
              )}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default CreatePostInput;
