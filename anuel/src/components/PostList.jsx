import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner, Alert, Dropdown } from 'react-bootstrap';
import { fetchWithAuth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';
import PostEditor from './PostEditor';
import CommentList from './CommentList';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

const PostList = ({ profileId, newPost }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [expandedPosts, setExpandedPosts] = useState({}); 
  const navigate = useNavigate();

  
  useEffect(() => {
    if (newPost) {
      setPosts(prevPosts => [newPost, ...prevPosts]);
    }
  }, [newPost]);

  
  const formatDate = (dateString) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true, locale: es });
    } catch (error) {
      console.error('Error al formatear fecha:', error);
      return 'fecha desconocida';
    }
  };

  
  const fetchPosts = async (pageNum = 1, append = false) => {
    try {
      const loadingFunc = append ? setLoadingMore : setLoading;
      loadingFunc(true);
      
      
      if (profileId && (typeof profileId === 'string' && !profileId.match(/^[0-9a-fA-F]{24}$/) && profileId !== 'me')) {
        console.log('ID de perfil no v�lido:', profileId);
        setPosts([]);
        setHasMore(false);
        setPage(1);
        setError('No se encontraron publicaciones para este perfil.');
        loadingFunc(false);
        return;
      }
      
      
      let url = 'http://localhost:8080/posts';
      if (profileId) {
        if (profileId === 'me') {
          url = 'http://localhost:8080/posts/my';
        } else {
          url = `http://localhost:8080/profile/${profileId}/posts`;
        }
      }
      
      
      url += `?page=${pageNum}&limit=10`;
      
      const res = await fetchWithAuth(url);
      
      if (!res.ok) {
        
        if (res.status === 401) {
          navigate('/login');
          return;
        }
        
        throw new Error('Error al obtener publicaciones');
      }
      
      const response = await res.json();
      const newPosts = response.data || [];
      const metadata = response.metadata || {};
      
      
      if (append) {
        setPosts(prevPosts => [...prevPosts, ...newPosts]);
      } else {
        setPosts(newPosts);
      }
      
      
      setHasMore(pageNum < metadata.pages);
      setPage(pageNum);
      
    } catch (error) {
      console.error('Error al obtener publicaciones:', error);
      setError('No se pudieron cargar las publicaciones. Por favor, intente nuevamente.');
      
      
      if (!append) {
        setPosts([]);
      }
    } finally {
      const loadingFunc = append ? setLoadingMore : setLoading;
      loadingFunc(false);
    }
  };

  
  useEffect(() => {
    fetchPosts();
  }, [profileId]);

  
  const loadMorePosts = () => {
    if (!loadingMore && hasMore) {
      fetchPosts(page + 1, true);
    }
  };

  
  const handleLike = async (postId) => {
    try {
      
      if (!postId || !postId.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('ID de post no v�lido para dar like:', postId);
        return;
      }
      
      
      const currentPost = posts.find(post => post._id === postId);
      if (!currentPost) return;
      
      
      const newLikedState = !currentPost.liked;
      const newLikeCount = newLikedState 
        ? (currentPost.contadorMeGusta || 0) + 1 
        : Math.max(0, (currentPost.contadorMeGusta || 0) - 1);
        
      
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post._id === postId 
            ? { ...post, contadorMeGusta: newLikeCount, liked: newLikedState }
            : post
        )
      );
      
      
      const res = await fetchWithAuth(`http://localhost:8080/posts/${postId}/like`, {
        method: 'POST'
      });
      
      if (!res.ok) {
        throw new Error('Error al procesar el like');
      }
      
      const data = await res.json();
      console.log('Respuesta del like:', data);
      
      
      if (data.likeCount !== newLikeCount || data.liked !== newLikedState) {
        setPosts(prevPosts => 
          prevPosts.map(post => 
            post._id === postId 
              ? { ...post, contadorMeGusta: data.likeCount, liked: data.liked }
              : post
          )
        );
      }
      
    } catch (error) {
      console.error('Error al dar like:', error);
      
      const originalPost = posts.find(post => post._id === postId);
      if (originalPost) {
        setPosts(prevPosts => 
          prevPosts.map(post => 
            post._id === postId 
              ? originalPost
              : post
          )
        );
      }
    }
  };

  const handleDelete = async (postId) => {
    try {
      
      if (!postId || !postId.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('ID de post no v�lido para eliminar:', postId);
        return;
      }
      
      const res = await fetchWithAuth(`http://localhost:8080/posts/${postId}`, {
        method: 'DELETE'
      });
      
      if (!res.ok) {
        throw new Error('Error al eliminar la publicaci�n');
      }
      
      
      setPosts(prevPosts => prevPosts.filter(post => post._id !== postId));
      
    } catch (error) {
      console.error('Error al eliminar publicaci�n:', error);
      alert('No se pudo eliminar la publicaci�n. Por favor, intente nuevamente.');
    }
  };

  const handleEdit = (postId) => {
    const postToEdit = posts.find(post => post._id === postId);
    if (postToEdit) {
      setEditingPost(postToEdit);
      setShowEditor(true);
    }
  };

  
  const handlePostUpdated = (updatedPost) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post._id === updatedPost._id ? updatedPost : post
      )
    );
  };

  
  const handleCommentAdded = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post._id === postId 
          ? { ...post, contadorComentarios: (post.contadorComentarios || 0) + 1 }
          : post
      )
    );
  };

  
  const canEditPost = (post) => {
    
    
    return true;
  };

  
  const checkPostLike = async (postId) => {
    try {
      
      if (!postId || !postId.match(/^[0-9a-fA-F]{24}$/)) {
        console.log('ID no v�lido para verificar like:', postId);
        return;
      }
      
      const res = await fetchWithAuth(`http://localhost:8080/posts/${postId}/like`);
      
      if (!res.ok) {
        throw new Error('Error al verificar like');
      }
      
      const data = await res.json();
      
      
      setPosts(prevPosts => 
        prevPosts.map(post => 
          post._id === postId 
            ? { ...post, liked: data.liked }
            : post
        )
      );
      
    } catch (error) {
      console.error('Error al verificar like:', error);
    }
  };
  
  
  useEffect(() => {
    if (!posts.length) return;
    
    
    posts
      .filter(post => post._id && post._id.match(/^[0-9a-fA-F]{24}$/))
      .forEach(post => {
        checkPostLike(post._id);
      });
  }, [posts.length]); 

  
  const toggleComments = (postId) => {
    
    if (!postId || !postId.match(/^[0-9a-fA-F]{24}$/)) {
      console.warn("Intento de expandir comentarios con ID inv�lido:", postId);
      alert("No se pueden cargar los comentarios para esta publicaci�n.");
      return;
    }
    
    console.log("Alternando comentarios para publicaci�n ID:", postId);
    
    setExpandedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
    
    
    if (!expandedPosts[postId]) {
      console.log(`Mostrando comentarios para la publicaci�n ${postId}`);
    }
  };

  
  const navigateToProfile = (username) => {
    if (username) {
      navigate(`/profile/${username}`);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center my-5">
        <Spinner animation="border" className="text-primary" />
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <Alert variant="danger" className="my-4">
        <i className="bi bi-exclamation-triangle-fill me-2"></i>
        {error}
      </Alert>
    );
  }

  return (
    <div className="post-list py-3">
      {posts.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-3">
            <i className="bi bi-inbox fs-1 text-muted"></i>
          </div>
          <h3 className="h5 text-muted">No hay publicaciones para mostrar</h3>
          <p className="text-muted">
            {profileId ? 'Este usuario a�n no ha publicado nada' : 'Sigue a m�s usuarios o crea una publicaci�n'}
          </p>
        </div>
      ) : (
        <>
          {posts.map(post => (
            <Card key={post._id} className="qubo-post mb-4">
              <Card.Body className="p-4">
                {}
                <div className="d-flex justify-content-between mb-3">
                  <div className="d-flex">
                    <div className="me-3">
                      {post.perfil?.fotoPerfil ? (
                        <img 
                          src={post.perfil.fotoPerfil} 
                          alt={`Foto de ${post.perfil.nombre}`} 
                          className="rounded-circle qubo-post-avatar" 
                          width="50" 
                          height="50"
                        />
                      ) : (
                        <div className="rounded-circle bg-light d-flex align-items-center justify-content-center qubo-post-avatar">
                          <span className="fs-5 text-primary fw-bold">
                            {post.perfil?.nombre?.charAt(0).toUpperCase() || 'Q'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h5 className="mb-0 fw-bold" onClick={() => navigateToProfile(post.perfil?.nombreUsuario)} style={{ cursor: 'pointer' }}>{post.perfil?.nombre || 'Usuario'}</h5>
                      <p className="text-muted mb-0 small" onClick={() => navigateToProfile(post.perfil?.nombreUsuario)} style={{ cursor: 'pointer' }}>@{post.perfil?.nombreUsuario || 'usuario'}</p>
                      <small className="text-muted">{formatDate(post.fechaCreacion)}</small>
                      {post.editada && (
                        <small className="text-muted ms-2">(editado)</small>
                      )}
                    </div>
                  </div>
                  
                  {canEditPost(post) && (
                    <Dropdown align="end">
                      <Dropdown.Toggle variant="link" className="btn-sm text-muted p-0 shadow-none" id={`dropdown-${post._id}`}>
                        <i className="bi bi-three-dots"></i>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="shadow-sm border-light">
                        <Dropdown.Item onClick={() => handleEdit(post._id)} className="text-primary">
                          <i className="bi bi-pencil me-2"></i> Editar
                        </Dropdown.Item>
                        <Dropdown.Item 
                          onClick={() => handleDelete(post._id)}
                          className="text-danger"
                        >
                          <i className="bi bi-trash me-2"></i> Eliminar
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </div>
                
                {}
                <div className="mb-3 qubo-post-content">
                  <p className="mb-0">{post.contenido}</p>
                  
                  {post.imagenUrl && (
                    <div className="mt-3">
                      <img 
                        src={post.imagenUrl} 
                        alt="Imagen de la publicaci�n" 
                        className="img-fluid rounded"
                      />
                    </div>
                  )}
                </div>
                
                {}
                <div className="d-flex border-top pt-3 mt-3">
                  <Button 
                    variant="link" 
                    className={`text-decoration-none p-0 me-4 d-flex align-items-center qubo-post-button qubo-post-button-like ${post.liked ? 'text-danger' : 'text-muted'}`}
                    onClick={() => handleLike(post._id)}
                    aria-label={post.liked ? "Quitar me gusta" : "Me gusta"}
                  >
                    <i className={`bi ${post.liked ? 'bi-heart-fill' : 'bi-heart'} me-1`}></i> 
                    <span>{post.contadorMeGusta || 0}</span>
                  </Button>
                  <Button 
                    variant="link" 
                    className="text-decoration-none text-muted p-0 me-4 d-flex align-items-center qubo-post-button"
                    onClick={() => toggleComments(post._id)}
                  >
                    <i className="bi bi-chat me-1"></i> 
                    <span>{post.contadorComentarios || 0}</span>
                  </Button>
                  <Button 
                    variant="link" 
                    className="text-decoration-none text-muted p-0 d-flex align-items-center qubo-post-button"
                  >
                    <i className="bi bi-share me-1"></i>
                    <span>Compartir</span>
                  </Button>
                </div>
                
                {}
                <div className="mt-3">
                  <Button 
                    variant="link" 
                    className="text-decoration-none p-0 text-primary"
                    onClick={() => toggleComments(post._id)}
                  >
                    <i className={`bi ${expandedPosts[post._id] ? 'bi-dash-circle' : 'bi-plus-circle'} me-2`}></i>
                    <span>{expandedPosts[post._id] ? 'Ocultar comentarios' : `Ver comentarios (${post.contadorComentarios || 0})`}</span>
                  </Button>
                </div>
                
                {}
                {expandedPosts[post._id] && (
                  <div className="mt-3 border-top pt-3">
                    {post._id && post._id.match(/^[0-9a-fA-F]{24}$/) ? (
                      <CommentList 
                        postId={post._id} 
                        onCommentAdded={() => handleCommentAdded(post._id)}
                      />
                    ) : (
                      <div className="text-center text-muted py-3">
                        <i className="bi bi-exclamation-circle me-2"></i>
                        No se pueden cargar los comentarios. ID de publicaci�n no v�lido.
                      </div>
                    )}
                  </div>
                )}
              </Card.Body>
            </Card>
          ))}
          
          {}
          {hasMore && (
            <div className="text-center my-4">
              <Button 
                variant="outline-primary" 
                onClick={loadMorePosts}
                disabled={loadingMore}
                className="rounded-pill px-4"
              >
                {loadingMore ? (
                  <>
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                    Cargando...
                  </>
                ) : (
                  <>
                    <i className="bi bi-arrow-down-circle me-2"></i>
                    Cargar m�s publicaciones
                  </>
                )}
              </Button>
            </div>
          )}
        </>
      )}
      
      {}
      <PostEditor 
        post={editingPost}
        show={showEditor}
        onHide={() => setShowEditor(false)}
        onPostUpdated={handlePostUpdated}
      />
    </div>
  );
};

export default PostList;
