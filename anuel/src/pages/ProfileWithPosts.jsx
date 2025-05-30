import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Tab, Nav, Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import PostList from '../components/PostList';
import RightSidebar from '../components/RightSidebar';
import { fetchWithAuth } from '../utils/auth';

const ProfileWithPosts = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('posts');
  const [isOwnProfile, setIsOwnProfile] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError('');
          
        let profileRes;
        
        if (!username) {
          
          profileRes = await fetchWithAuth('http://localhost:8080/profile/me');
          setIsOwnProfile(true);
        } else {
          
          
          
            try {
            
            const myProfileRes = await fetchWithAuth('http://localhost:8080/profile/me');
            if (myProfileRes.ok) {
              const myProfileData = await myProfileRes.json();
              
              
              if (myProfileData.nombreUsuario === username) {
                profileRes = myProfileRes;
                setIsOwnProfile(true);
              } else {
                
                const otherProfileRes = await fetchWithAuth(`http://localhost:8080/profile/username/${username}`);
                profileRes = otherProfileRes;
                setIsOwnProfile(false);
              }
            } else {
              profileRes = { ok: false };
              setIsOwnProfile(false);
            }
          } catch (error) {
            console.error('Error al verificar perfil propio:', error);
            profileRes = { ok: false };
            setIsOwnProfile(false);
          }
        }
          if (profileRes.ok) {
          const data = await profileRes.json();
          
          if (data && !data.seguidores && !data.siguiendo) {
            
            try {
              if (data._id) {
                
                const followersRes = await fetchWithAuth(`http://localhost:8080/profile/${data._id}/followers`);
                if (followersRes.ok) {
                  const followersData = await followersRes.json();
                  data.seguidores = followersData.metadata.total;
                }
                
                
                const followingRes = await fetchWithAuth(`http://localhost:8080/profile/${data._id}/following`);
                if (followingRes.ok) {
                  const followingData = await followingRes.json();
                  data.siguiendo = followingData.metadata.total;
                }
              }
            } catch (error) {
              console.error('Error al obtener datos de seguidores/seguidos:', error);
              
              data.seguidores = data.seguidores || 0;
              data.siguiendo = data.siguiendo || 0;
            }
          }
          setProfileData(data);
        } else {          console.error('Error al cargar el perfil:', profileRes.statusText);
          setError(`No se pudo cargar el perfil para ${username || 'el usuario actual'}. Verifica que el usuario exista.`);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener perfil:', error);
        setError('No se pudo cargar el perfil. Por favor, intente nuevamente.');
        setLoading(false);
      }
    };
    
    fetchProfile();
  }, [username]);
  
  useEffect(() => {
    if (!isOwnProfile && profileData && profileData._id) {
      const checkFollowStatus = async () => {
        try {          
          if (!profileData._id || !profileData._id.match(/^[0-9a-fA-F]{24}$/)) {
            console.log('ID de perfil no válido, asumiendo que no se sigue');
            setIsFollowing(false);
            return;
          }
          
          const res = await fetchWithAuth(`http://localhost:8080/profile/${profileData._id}/follow`);
          if (res.ok) {
            const data = await res.json();
            setIsFollowing(data.following);
          }
        } catch (error) {
          console.error('Error al verificar estado de seguimiento:', error);
          setIsFollowing(false);
        }
      };
      
      checkFollowStatus();
    }
  }, [isOwnProfile, profileData]);
  
  const handleFollowToggle = async () => {
    if (!profileData || !profileData._id) return;
    
    try {      
      if (!profileData._id || !profileData._id.match(/^[0-9a-fA-F]{24}$/)) {
        console.error('Perfil sin ID válido, no se puede realizar la acción de seguir');
        alert('No se puede seguir a este perfil. Intenta más tarde.');
        return;
      }
      
      
      setIsFollowing(prevState => !prevState);
      
      
      setProfileData(prevData => ({
        ...prevData,
        seguidores: isFollowing ? prevData.seguidores - 1 : prevData.seguidores + 1
      }));
      
      
      const res = await fetchWithAuth(`http://localhost:8080/profile/${profileData._id}/follow`, {
        method: 'POST'
      });
      
      if (!res.ok) {
        throw new Error('Error al procesar la acción de seguir');
      }
      
      const data = await res.json();
      console.log('Respuesta de follow:', data);
      
      
      setIsFollowing(data.following);
      
    } catch (error) {
      console.error('Error al seguir/dejar de seguir:', error);
      
      setIsFollowing(prevState => !prevState);
      
      
      setProfileData(prevData => ({
        ...prevData,
        seguidores: isFollowing ? prevData.seguidores + 1 : prevData.seguidores - 1
      }));
    }
  };  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  
  const showFollowersDialog = (type) => {
    alert(`Esta función para mostrar ${type === 'followers' ? 'seguidores' : 'seguidos'} se implementará en una próxima versión`);
  };if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }
  
  if (error) {
    return (
      <MainLayout>
        <Container className="mt-5 text-center">
          <div className="alert alert-danger">
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            {error}
          </div>
          <Button 
            variant="primary" 
            className="mt-3"
            onClick={() => navigate('/')}
          >
            Volver al inicio
          </Button>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout username={profileData?.nombreUsuario}>
      {}
      <div className="bg-gradient-to-r from-primary to-info" style={{ height: '12rem', background: 'linear-gradient(90deg, #0d6efd 0%, #0dcaf0 100%)' }}></div>
      
      <Container fluid>
        {}
        <div className="position-relative mb-5">
          {}
          <div className="position-absolute" style={{ top: '-75px', left: '20px' }}>
            <div className="rounded-circle border border-4 border-white bg-white d-flex align-items-center justify-content-center overflow-hidden" style={{ width: '150px', height: '150px' }}>
              {profileData?.fotoPerfil ? (
                <img 
                  src={profileData.fotoPerfil} 
                  alt={`Foto de perfil de ${profileData.nombreUsuario}`}
                  className="w-100 h-100 object-fit-cover"
                />
              ) : (
                <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-secondary">
                  <i className="bi bi-person-fill" style={{ fontSize: '4rem' }}></i>
                </div>
              )}
            </div>
          </div>
          
          {}
          <div className="d-flex justify-content-end pt-3">
            {isOwnProfile ? (
              <>
                <Button 
                  variant="outline-secondary" 
                  size="sm" 
                  className="rounded-pill px-3 me-2"
                  onClick={() => navigate('/edit-profile')}
                >
                  <i className="bi bi-pencil me-1"></i> Editar perfil
                </Button>
                <Button 
                  variant="outline-danger" 
                  size="sm" 
                  className="rounded-pill px-3"
                  onClick={() => navigate('/delete-profile')}
                >
                  <i className="bi bi-trash me-1"></i> Eliminar perfil
                </Button>
              </>
            ) : (
              <Button 
                variant={isFollowing ? "outline-primary" : "primary"} 
                size="sm" 
                className="rounded-pill px-3"
                onClick={handleFollowToggle}
              >
                {isFollowing ? (
                  <>
                    <i className="bi bi-check-circle me-1"></i> Siguiendo
                  </>
                ) : (
                  <>
                    <i className="bi bi-person-plus me-1"></i> Seguir
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
        
        <Row>
          <Col lg={8}>
            {}
            <div className="mt-5 pt-4 ps-3">
              <h1 className="fs-4 fw-bold">{profileData?.nombre}</h1>
              <p className="text-secondary">@{profileData?.nombreUsuario}</p>
              
              {profileData?.biografia && (
                <p className="mt-3">{profileData.biografia}</p>
              )}
              
              {}
              <div className="mt-3 d-flex align-items-center text-secondary">
                <div className="d-flex align-items-center">
                  <i className="bi bi-calendar me-1"></i>
                  <span>Se unió en {formatDate(profileData?.fechaCreacion || new Date())}</span>
                </div>
              </div>
              
              {}              <div className="mt-3 d-flex gap-4">
                <div role="button" onClick={() => showFollowersDialog('following')} style={{ cursor: 'pointer' }}>
                  <span className="fw-bold">{profileData?.siguiendo || 0}</span>
                  <span className="ms-1 text-secondary">Siguiendo</span>
                </div>
                <div role="button" onClick={() => showFollowersDialog('followers')} style={{ cursor: 'pointer' }}>
                  <span className="fw-bold">{profileData?.seguidores || 0}</span>
                  <span className="ms-1 text-secondary">Seguidores</span>
                </div>
              </div>
            </div>
            
            {}
            <div className="mt-4">
              <Tab.Container id="profile-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="tabs" className="border-bottom mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="posts" className="px-4">
                      <i className="bi bi-file-text me-2"></i> Publicaciones
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="likes" className="px-4">
                      <i className="bi bi-heart me-2"></i> Me gusta
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                
                <Tab.Content>
                  <Tab.Pane eventKey="posts">
                    <PostList profileId={isOwnProfile ? 'me' : profileData?._id} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="likes">
                    <div className="text-center py-5">
                      <i className="bi bi-heart-fill text-muted display-4"></i>
                      <h3 className="mt-3">No hay me gusta aún</h3>
                      <p className="text-muted">Cuando des me gusta a publicaciones, aparecerán aquí.</p>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
          
          {}
          <Col lg={4} className="d-none d-lg-block position-sticky" style={{ top: '1rem' }}>
            <RightSidebar />
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default ProfileWithPosts;
