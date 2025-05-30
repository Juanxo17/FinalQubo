import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, Spinner, Alert } from 'react-bootstrap';
import { fetchWithAuth } from '../utils/auth';

const PostEditor = ({ post, show, onHide, onPostUpdated }) => {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');
  const [showImageInput, setShowImageInput] = useState(false);

  
  useEffect(() => {
    if (post) {
      setContent(post.contenido || '');
      
      if (post.imagenUrl) {
        setImageUrl(post.imagenUrl);
        setShowImageInput(true);
      } else {
        setImageUrl('');
        setShowImageInput(false);
      }
      
      setError('');
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!content.trim()) {
      setError('El contenido no puede estar vacío');
      return;
    }
    
    setIsUpdating(true);
    setError('');
    
    try {
      const postData = {
        contenido: content,
        imagenUrl: showImageInput ? imageUrl : ''
      };
      
      const res = await fetchWithAuth(`http://localhost:8080/posts/${post._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al actualizar la publicación');
      }
      
      const responseData = await res.json();
      
      
      if (onPostUpdated && responseData.publicacion) {
        onPostUpdated(responseData.publicacion);
      }
      
      
      onHide();
      
    } catch (error) {
      console.error('Error al actualizar publicación:', error);
      setError(error.message || 'No se pudo actualizar la publicación');
      
      
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        console.log('Simulando actualización de publicación en modo offline');
        
        if (onPostUpdated) {
          const updatedPost = {
            ...post,
            contenido: content,
            imagenUrl: showImageInput ? imageUrl : '',
            editada: true,
            fechaEdicion: new Date().toISOString()
          };
          
          onPostUpdated(updatedPost);
          onHide();
        }
      }
    } finally {
      setIsUpdating(false);
    }
  };

  const toggleImageInput = () => {
    setShowImageInput(!showImageInput);
    if (showImageInput) {
      setImageUrl('');
    }
  };

    return (
    <Modal show={show} onHide={onHide} centered backdrop="static" className="qubo-rounded-border">
      <Modal.Header closeButton className="border-bottom" style={{ backgroundColor: 'var(--qubo-light)' }}>
        <Modal.Title className="fw-bold">Editar publicación</Modal.Title>
      </Modal.Header>
      
      <Form onSubmit={handleSubmit}>
        <Modal.Body className="px-4 py-4">
          {error && (
            <Alert variant="danger" className="mb-3 d-flex align-items-center">
              <i className="bi bi-exclamation-triangle-fill me-2 fs-5"></i>
              <span>{error}</span>
            </Alert>
          )}
          
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="¿Qué estás pensando?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="qubo-shadow-sm border-light"
              style={{ 
                borderRadius: 'var(--qubo-border-radius-md)',
                resize: 'none',
                fontSize: '1.1rem'
              }}
            />
          </Form.Group>
          
          <div className="mb-3">
            <Button 
              variant={showImageInput ? "outline-danger" : "outline-primary"} 
              size="sm"
              type="button"
              onClick={toggleImageInput}
              className="d-flex align-items-center rounded-pill qubo-hover-effect px-3 py-2"
            >
              <i className={`bi ${showImageInput ? 'bi-x-circle' : 'bi-image'} me-1`}></i>
              <span>
                {showImageInput ? 'Quitar imagen' : 'Agregar imagen'}
              </span>
            </Button>
          </div>
          
          {showImageInput && (
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">URL de la imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://ejemplo.com/imagen.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="qubo-shadow-sm"
                style={{ borderRadius: 'var(--qubo-border-radius-md)' }}
              />
              
              {imageUrl && (
                <div className="mt-3 border rounded p-2 bg-light qubo-shadow-sm" style={{ borderRadius: 'var(--qubo-border-radius-md)' }}>
                  <img 
                    src={imageUrl} 
                    alt="Vista previa" 
                    className="img-fluid rounded mx-auto d-block" 
                    style={{ 
                      maxHeight: '200px', 
                      objectFit: 'cover',
                      borderRadius: 'var(--qubo-border-radius-sm)'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/300x200?text=Error+de+imagen';
                    }}
                  />
                </div>
              )}
            </Form.Group>
          )}
        </Modal.Body>
        
        <Modal.Footer className="border-top py-3">
          <Button 
            variant="light" 
            onClick={onHide} 
            disabled={isUpdating}
            className="rounded-pill px-4 qubo-hover-effect"
          >
            Cancelar
          </Button>
          <Button 
            variant="primary" 
            type="submit"
            disabled={!content.trim() || isUpdating}
            className="rounded-pill px-4 fw-semibold qubo-hover-effect"
          >
            {isUpdating ? (
              <>
                <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                Actualizando...
              </>
            ) : (
              <>
                <i className="bi bi-check2 me-2"></i>
                Guardar cambios
              </>
            )}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default PostEditor;
