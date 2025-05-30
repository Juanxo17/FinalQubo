import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Alert, Form, Button, Spinner } from 'react-bootstrap';
import MainLayout from '../components/MainLayout';
import { fetchWithAuth } from '../utils/auth';

const DeleteProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [confirmation, setConfirmation] = useState('');
  useEffect(() => {
    
    const checkProfile = async () => {
      try {
        const res = await fetchWithAuth('http://localhost:8080/check-profile');
        const data = await res.json();
        
        if (!res.ok) {
          setError('Error al verificar el perfil');
          setLoading(false);
          return;
        }
        
        if (!data.hasProfile) {
          
          navigate('/feed');
          return;
        }
        
        
        try {
          const profileRes = await fetchWithAuth('http://localhost:8080/profile/me');
            if (!profileRes.ok) {
            setError('No se pudieron cargar los datos del perfil');
            setLoading(false);
            return;
          } else {
            const profileData = await profileRes.json();
            
            setProfileData({
              ...profileData,
              perfilId: profileData._id || profileData.perfilId
            });
            console.log("ID del perfil cargado:", profileData._id || profileData.perfilId);
          }
        } catch (error) {
          console.error('Error al obtener datos del perfil:', error);
          setError('Error al obtener datos del perfil');
          setLoading(false);
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error al verificar perfil:', error);
        setError('Error al conectar con el servidor');
        setLoading(false);
      }
    };

    checkProfile();
  }, [navigate]);  const handleDeleteProfile = async () => {
    if (confirmation !== profileData.nombreUsuario) {
      setError('Por favor, escribe el nombre de usuario correcto para confirmar');
      return;
    }

    setDeleting(true);
    setError('');

    try {
      
      if (!profileData.perfilId) {
        console.error('ID de perfil no válido para eliminar:', profileData.perfilId);
        setError('No se pudo obtener el ID del perfil para eliminar');
        setDeleting(false);
        return;
      }
      
      console.log('Intentando eliminar perfil con ID:', profileData.perfilId);
      
      
      const res = await fetchWithAuth(
        `http://localhost:8080/profile/${profileData.perfilId}`,
        {
          method: 'DELETE'
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Error al eliminar el perfil');
      }

      
      navigate('/feed');
    } catch (error) {
      console.error('Error al eliminar perfil:', error);
      setError(error.message || 'Error al eliminar el perfil');
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <MainLayout username={profileData?.nombreUsuario}>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col md={10} lg={8} xl={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">
                <div className="text-center mb-4">
                  <div className="bg-danger bg-opacity-10 text-danger rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '64px', height: '64px' }}>
                    <i className="bi bi-trash-fill fs-3"></i>
                  </div>
                  <h1 className="fs-3 fw-bold">Eliminar Perfil</h1>
                  <p className="text-muted">
                    Esta acción eliminará permanentemente tu perfil y toda la información asociada a él.
                  </p>
                </div>

                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                <Alert variant="warning" className="mb-4">
                  <h5 className="fw-bold">⚠️ Advertencia</h5>
                  <p>
                    Al eliminar tu perfil:
                  </p>
                  <ul className="mb-0 ps-4">
                    <li>Perderás toda tu información de perfil</li>
                    <li>Se eliminarán tus publicaciones</li>
                    <li>Perderás tus conexiones con otros usuarios</li>
                    <li>Esta acción NO puede deshacerse</li>
                  </ul>
                </Alert>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">
                    Para confirmar, escribe tu nombre de usuario: <span className="fw-bold">{profileData?.nombreUsuario}</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                    placeholder={`Escribe "${profileData?.nombreUsuario}" para confirmar`}
                    className="py-2"
                  />
                </Form.Group>

                <div className="d-flex align-items-center justify-content-between">
                  <Button
                    variant="outline-secondary"
                    onClick={() => navigate('/profile')}
                    className="px-4"
                  >
                    Cancelar
                  </Button>
                  <Button
                    variant={confirmation === profileData?.nombreUsuario ? "danger" : "secondary"}
                    onClick={handleDeleteProfile}
                    disabled={deleting || confirmation !== profileData?.nombreUsuario}
                    className="px-4"
                  >
                    {deleting ? (
                      <>
                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                        Eliminando...
                      </>
                    ) : (
                      'Eliminar Permanentemente'
                    )}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default DeleteProfile;
