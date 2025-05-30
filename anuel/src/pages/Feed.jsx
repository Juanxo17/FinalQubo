import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import MainLayout from '../components/MainLayout';
import CreatePostInput from '../components/CreatePostInput';
import PostList from '../components/PostList';
import RightSidebar from '../components/RightSidebar';
import { fetchWithAuth } from '../utils/auth';

const Feed = () => {  const [username, setUsername] = useState('');
  const [newPost, setNewPost] = useState(null);
  const [profileLoading, setProfileLoading] = useState(true);
  
  useEffect(() => {
    
    const getUserInfo = async () => {
      try {
        setProfileLoading(true);
        
        const res = await fetchWithAuth('http://localhost:8080/profile/me');
        
        if (res.ok) {
          const data = await res.json();
          setUsername(data.nombreUsuario || '');
        } else {
          console.error('Error al obtener datos de perfil:', res.status);
        }
      } catch (error) {
        console.error('Error al obtener datos de perfil:', error);
      } finally {
        setProfileLoading(false);
      }
    };
    
    getUserInfo();
  }, []);
  
  const handlePostCreated = (post) => {
    setNewPost(post);
  };    return (
    <MainLayout username={username}>
      <Container fluid className="py-4">
        {profileLoading ? (
          <div className="d-flex justify-content-center py-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <Row>
            {}
            <Col lg={7} className="px-lg-4">
              <div className="card border-0 shadow-sm rounded-3 mb-4">
                <div className="card-header bg-white border-0 py-3">
                  <h5 className="mb-0">
                    <i className="bi bi-house-door me-2 text-primary"></i>
                    Inicio
                  </h5>
                </div>
                <div className="card-body pt-0">
                  {}
                  <CreatePostInput onPostCreated={handlePostCreated} />
                  
                  {}
                  <PostList newPost={newPost} />
                </div>
              </div>
            </Col>
            
            {}
            <Col lg={5} className="d-none d-lg-block position-sticky" style={{ top: '1rem' }}>
              <RightSidebar />
            </Col>
          </Row>
        )}
      </Container>
    </MainLayout>
  );
};

export default Feed;
