import React, { useState, useEffect } from 'react';
import { Form, Button, Spinner, Image } from 'react-bootstrap';
import { fetchWithAuth } from '../utils/auth';

const CommentInput = ({ postId, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [userProfile, setUserProfile] = useState(null);

  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetchWithAuth('http://localhost:8080/profile/me');
        if (res.ok) {
          const data = await res.json();
          setUserProfile(data);
        }
      } catch (error) {
        console.error('Error al obtener perfil:', error);
      }
    };

    fetchUserProfile();
  }, []);  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!comment.trim()) return;
    
    setIsSubmitting(true);
    setError('');
    
    try {
      
      const commentData = {
        contenido: comment,
        publicacionId: postId
      };
      
      
      const res = await fetchWithAuth(`http://localhost:8080/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al crear el comentario');
      }
      
      const responseData = await res.json();
        
      setComment('');
      
      
      if (onCommentAdded && responseData && responseData.comentario) {
        console.log("Comentario creado con éxito:", responseData.comentario);
        onCommentAdded(responseData.comentario);
      } else {
        console.warn("No se pudo notificar la creación del comentario o respuesta incompleta", responseData);
      }
    } catch (error) {
      console.error('Error al crear comentario:', error);
      setError('No se pudo enviar el comentario. Intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (    <Form onSubmit={handleSubmit} className="d-flex align-items-start">
      <div className="me-2">
        {userProfile?.fotoPerfil ? (
          <Image 
            src={userProfile.fotoPerfil} 
            alt={`Foto de ${userProfile.nombre}`} 
            className="rounded-circle" 
            width="36" 
            height="36"
          />
        ) : (<div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '36px', height: '36px' }}>
            <span className="text-primary fw-bold">
              {userProfile?.nombre?.charAt(0).toUpperCase() || 'Q'}
            </span>
          </div>
        )}
      </div>      <Form.Group className="flex-grow-1 me-2">
        <Form.Control
          as="textarea"
          placeholder="Escribe un comentario..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          size="sm"
          rows={1}
          className="rounded-pill py-2 border-light shadow-sm"
          disabled={isSubmitting}
        />
        {error && (
          <div className="text-danger small mt-1">
            <i className="bi bi-exclamation-circle-fill me-1"></i>
            {error}
          </div>
        )}
      </Form.Group>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="rounded-circle d-flex align-items-center justify-content-center shadow-sm"
        style={{ width: '36px', height: '36px' }}
        disabled={!comment.trim() || isSubmitting}
      >
        {isSubmitting ? (
          <Spinner animation="border" size="sm" />
        ) : (
          <i className="bi bi-send-fill"></i>
        )}
      </Button>
    </Form>
  );
};

export default CommentInput;
