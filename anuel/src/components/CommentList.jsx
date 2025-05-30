import React, { useState, useEffect, useCallback } from 'react';
import { Card, Button, Spinner, Form, Image, Alert } from 'react-bootstrap';
import { fetchWithAuth } from '../utils/auth';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import CommentInput from './CommentInput';


const CommentItem = ({ comment, onEdit, onDelete, currentUserId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment?.contenido || '');
  const [isSubmitting, setIsSubmitting] = useState(false);
    
  if (!comment || !comment._id) {
    return (
      <Card className="qubo-comment mb-2">
        <Card.Body className="p-3">
          <div className="d-flex align-items-center">
            <div className="me-2">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <span className="text-primary">?</span>
              </div>
            </div>
            <div>
              <p className="mb-0 text-muted">Comentario no disponible</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  }
  
  const isOwner = comment.perfilId === currentUserId || 
                  (comment.perfil && comment.perfil._id === currentUserId);
  
  const handleEditClick = () => {
    setEditedContent(comment.contenido);
    setIsEditing(true);
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedContent(comment.contenido);
  };
  
  const handleSaveEdit = async () => {
    if (!editedContent.trim() || editedContent === comment.contenido) {
      setIsEditing(false);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await onEdit(comment._id, editedContent);
      setIsEditing(false);
    } catch (error) {
      console.error('Error al editar comentario:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <Card className="qubo-comment mb-3 border border-light">
      <Card.Body className="p-3">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-start">
            <div className="me-2">
              {comment.perfil?.fotoPerfil ? (
                <Image 
                  src={comment.perfil.fotoPerfil} 
                  alt={`Foto de ${comment.perfil.nombre}`}
                  roundedCircle
                  width="32" 
                  height="32"
                />
              ) : (
                <div className="rounded-circle bg-light d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                  <span className="text-primary fw-bold">
                    {comment.perfil?.nombre?.charAt(0).toUpperCase() || 'Q'}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-grow-1">
              <p className="fw-bold mb-0 fs-6">
                {comment.perfil?.nombre || comment.perfil?.nombreUsuario || 'Usuario'}
              </p>
              {!isEditing ? (
                <>
                  <p className="mb-1 small">
                    {comment.contenido}
                  </p>
                  <div className="d-flex align-items-center">
                    <small className="text-muted">
                      {comment.editado ? 'Editado · ' : ''}
                      {formatDistanceToNow(new Date(comment.fecha || comment.fechaEdicion || Date.now()), 
                        { addSuffix: true, locale: es })}
                    </small>
                  </div>
                </>
              ) : (
                <Form className="mt-2">
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                      disabled={isSubmitting}
                      className="mb-2"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end">
                    <Button 
                      variant="outline-secondary" 
                      size="sm" 
                      onClick={handleCancelEdit}
                      disabled={isSubmitting}
                      className="me-2"
                    >
                      <i className="bi bi-x-circle me-1"></i>
                      Cancelar
                    </Button>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      onClick={handleSaveEdit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-1" />
                          Guardando...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-check-circle me-1"></i>
                          Guardar
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              )}
            </div>
          </div>
          
          {isOwner && !isEditing && (
            <div className="dropdown">
              <button 
                className="btn btn-sm btn-link text-muted p-0" 
                type="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                <i className="bi bi-three-dots-vertical"></i>
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <button 
                    className="dropdown-item text-primary" 
                    onClick={handleEditClick}
                  >
                    <i className="bi bi-pencil me-2"></i>
                    Editar
                  </button>
                </li>
                <li>
                  <button 
                    className="dropdown-item text-danger" 
                    onClick={() => onDelete(comment._id)}
                  >
                    <i className="bi bi-trash me-2"></i>
                    Eliminar
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};


const CommentList = ({ postId, onCommentAdded }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUserId, setCurrentUserId] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', variant: 'success' });

  
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await fetchWithAuth('http://localhost:8080/profile/me');
        if (res.ok) {
          const data = await res.json();
          setCurrentUserId(data._id);
        }
      } catch (error) {
        console.error('Error al obtener perfil del usuario:', error);
      }
    };
    
    fetchCurrentUser();
  }, []);

  
  const fetchComments = useCallback(async (pageNum = 1, append = false) => {
    try {
      const loadingFunc = append ? setLoadingMore : setLoading;
      loadingFunc(true);
      
      console.log(`Cargando comentarios para publicación ${postId}, página ${pageNum}`);
      
      
      if (!postId || postId === 'undefined') {
        console.error("ID de publicación inválido:", postId);
        throw new Error('ID de publicación inválido');
      }
      
      const url = `http://localhost:8080/posts/${postId}/comments?page=${pageNum}&limit=10`;
      console.log("URL de la solicitud:", url);
      
      const res = await fetchWithAuth(url);
      
      
      console.log("Respuesta del servidor:", {
        status: res.status,
        statusText: res.statusText,
        ok: res.ok
      });
      
      if (!res.ok) {
        let errorMessage = 'Error al cargar comentarios';
        try {
          const errorData = await res.json();
          console.error("Error de API:", errorData);
          errorMessage = errorData.error || errorMessage;
        } catch (parseError) {
          console.error("No se pudo parsear la respuesta de error:", parseError);
        }
        throw new Error(errorMessage);
      }
      
      const data = await res.json();
      console.log("Datos recibidos:", data);
      
      if (append) {
        setComments(prev => [...prev, ...(data.data || [])]);
      } else {
        setComments(data.data || []);
      }
      
      
      const metadata = data.metadata || {};
      setHasMore(pageNum < (metadata.pages || 0));
      setPage(pageNum);
    } catch (error) {
      console.error('Error al cargar comentarios:', error);
      setError(error.message || 'No se pudieron cargar los comentarios');
    } finally {
      const loadingFunc = append ? setLoadingMore : setLoading;
      loadingFunc(false);
    }
  }, [postId]);
  
  
  useEffect(() => {
    if (postId) {
      fetchComments(1, false);
    } else {
      setLoading(false);
    }
  }, [postId, fetchComments]);

  
  const handleEditComment = async (commentId, newContent) => {
    try {
      const res = await fetchWithAuth(`http://localhost:8080/comments/${commentId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contenido: newContent }),
      });
      
      if (!res.ok) {
        throw new Error('Error al editar comentario');
      }
      
      const data = await res.json();
      
      
      setComments(prev => 
        prev.map(c => c._id === commentId ? data.comentario : c)
      );
      
      setToast({
        show: true,
        message: 'Comentario actualizado',
        variant: 'success'
      });
      
      setTimeout(() => setToast({ show: false, message: '', variant: 'success' }), 3000);
      
      return data;
    } catch (error) {
      console.error('Error al editar comentario:', error);
      setToast({
        show: true,
        message: 'No se pudo editar el comentario',
        variant: 'danger'
      });
      setTimeout(() => setToast({ show: false, message: '', variant: 'danger' }), 3000);
      throw error;
    }
  };
  
  
  const handleDeleteComment = async (commentId) => {
    try {
      const res = await fetchWithAuth(`http://localhost:8080/comments/${commentId}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) {
        throw new Error('Error al eliminar comentario');
      }
      
      
      setComments(prev => prev.filter(c => c._id !== commentId));
      
      setToast({
        show: true,
        message: 'Comentario eliminado',
        variant: 'success'
      });
      
      setTimeout(() => setToast({ show: false, message: '', variant: 'success' }), 3000);
    } catch (error) {
      console.error('Error al eliminar comentario:', error);
      setToast({
        show: true,
        message: 'No se pudo eliminar el comentario',
        variant: 'danger'
      });
      setTimeout(() => setToast({ show: false, message: '', variant: 'danger' }), 3000);
    }
  };
  
  
  const handleCommentAdded = (newComment) => {
    setComments(prev => [newComment, ...prev]);
    if (onCommentAdded) {
      onCommentAdded();
    }
  };
  
  
  const loadMoreComments = () => {
    if (!loadingMore && hasMore) {
      fetchComments(page + 1, true);
    }
  };
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center py-3">
        <Spinner animation="border" className="text-primary" size="sm" />
        <span className="ms-2">Cargando comentarios...</span>
      </div>
    );
  }
  
  if (error) {
    return (
      <Alert variant="danger" className="mb-3">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        {error}
      </Alert>
    );
  }
  
  return (
    <div className="mt-3">
      <CommentInput postId={postId} onCommentAdded={handleCommentAdded} />
      
      <hr className="my-3" />
      
      {comments.length === 0 ? (
        <div className="text-center text-muted py-3">
          <i className="bi bi-chat-square-text me-2"></i>
          No hay comentarios. ¡Sé el primero en comentar!
        </div>
      ) : (
        <>
          <div className="fw-bold mb-3 small">
            <i className="bi bi-chat-square-quote me-2"></i>
            Comentarios ({comments.length})
          </div>
          
          {comments.map(comment => (
            <CommentItem
              key={comment._id}
              comment={comment}
              currentUserId={currentUserId}
              onEdit={handleEditComment}
              onDelete={handleDeleteComment}
            />
          ))}
          
          {hasMore && (
            <Button
              variant="outline-primary"
              size="sm"
              className="w-100 mt-2 rounded-pill"
              onClick={loadMoreComments}
              disabled={loadingMore}
            >
              {loadingMore ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" /> 
                  Cargando...
                </>
              ) : (
                <>
                  <i className="bi bi-chevron-down me-2"></i>
                  Cargar más comentarios
                </>
              )}
            </Button>
          )}
        </>
      )}
      
      {toast.show && (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
          <Alert variant={toast.variant} onClose={() => setToast({...toast, show: false})} dismissible>
            <i className={`bi ${toast.variant === 'success' ? 'bi-check-circle' : 'bi-exclamation-circle'} me-2`}></i>
            {toast.message}
          </Alert>
        </div>
      )}
    </div>
  );
};

export default CommentList;
