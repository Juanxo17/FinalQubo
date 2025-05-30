import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { fetchWithAuth } from "../utils/auth";
import { Container, Spinner, Row, Col, Button, Nav } from "react-bootstrap";

const ViewProfile = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const checkRes = await fetchWithAuth("http://localhost:8080/check-profile");
        const checkData = await checkRes.json();
        
        if (!checkRes.ok) {
          setError("Error al verificar el perfil");
          setLoading(false);
          return;
        }
        
        if (!checkData.hasProfile) {
          navigate("/profile");
          return;
        }
        
        try {
          const profileRes = await fetchWithAuth("http://localhost:8080/profile/me");
          
          if (!profileRes.ok) {
            setError("No se pudo cargar tu perfil");
            setLoading(false);
            return;
          } else {
            const data = await profileRes.json();
            setProfileData({
              ...data,
              seguidores: data.seguidores || 0,
              siguiendo: data.siguiendo || 0,
              publicaciones: data.publicaciones || 0
            });
          }
          
          setLoading(false);
        } catch (error) {
          console.error("Error al obtener datos del perfil:", error);
          setError("Error al obtener datos del perfil");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error al verificar perfil:", error);
        setError("Error al conectar con el servidor");
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);
    const formatDate = (dateString) => {
    if (!dateString) {
      return "mayo 2025";
    }
    
    try {
      const date = new Date(dateString);
      const options = { year: "numeric", month: "long" };
      return date.toLocaleDateString("es-ES", options);
    } catch (error) {
      console.error("Error al formatear fecha:", error);
      return "mayo 2025";
    }
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="text-center">
          <div className="alert alert-danger">{error}</div>
          <Button 
            variant="primary" 
            onClick={() => navigate("/")}
          >
            Volver al inicio
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <MainLayout username={profileData?.nombreUsuario}>
      
      <div className="bg-gradient-to-r from-primary to-info" style={{ height: "12rem", background: "linear-gradient(90deg, #0d6efd 0%, #0dcaf0 100%)" }}></div>
      
      <Container>
       
        <div className="position-relative mb-5">
        
          <div className="position-absolute" style={{ top: "-75px", left: "20px" }}>
            <div className="rounded-circle border border-4 border-white bg-white d-flex align-items-center justify-content-center overflow-hidden" style={{ width: "150px", height: "150px" }}>
              {profileData?.fotoPerfil ? (
                <img 
                  src={profileData.fotoPerfil} 
                  alt={`Foto de perfil de ${profileData.nombreUsuario}`}
                  className="w-100 h-100 object-fit-cover"
                />
              ) : (
                <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-secondary">
                  <i className="bi bi-person-fill" style={{ fontSize: "4rem" }}></i>
                </div>
              )}
            </div>
          </div>
          
          
          <div className="d-flex justify-content-end pt-3">
            <Button 
              variant="outline-primary" 
              className="rounded-pill px-3"
              onClick={() => navigate("/edit-profile")}
            >
              <i className="bi bi-pencil me-2"></i>
              Editar perfil
            </Button>
          </div>
        </div>
        
        <div className="mt-5 pt-4">
          <h1 className="fs-4 fw-bold">{profileData?.nombre}</h1>
          <p className="text-secondary">@{profileData?.nombreUsuario}</p>
          
          {profileData?.biografia && (
            <p className="mt-3">{profileData.biografia}</p>
          )}
          
          
          <div className="mt-3 d-flex align-items-center text-secondary">
            <i className="bi bi-calendar me-1"></i>
            <span>Se unió en {formatDate(profileData?.fechaCreacion)}</span>
          </div>
          
         
          <div className="mt-3 d-flex gap-4">
            <div>
              <span className="fw-bold">{profileData?.siguiendo || 0}</span>
              <span className="ms-1 text-secondary">Siguiendo</span>
            </div>
            <div>
              <span className="fw-bold">{profileData?.seguidores || 0}</span>
              <span className="ms-1 text-secondary">Seguidores</span>
            </div>
          </div>
        </div>
        
          <Nav variant="tabs" className="mt-4 border-bottom">
          <Nav.Item>
            <Nav.Link active>Publicaciones</Nav.Link>
          </Nav.Item>
        </Nav>
        
        
        <div className="py-4">
          <div className="text-center py-5">
            <i className="bi bi-journal-text text-muted" style={{ fontSize: "4rem" }}></i>
            <h4 className="mt-3">Aún no hay publicaciones</h4>
            <p className="text-muted">
              Pronto podrás ver tus publicaciones aquí
            </p>
            <Button 
              variant="primary" 
              className="mt-2 rounded-pill px-4"
              onClick={() => navigate("/feed")}
            >
              <i className="bi bi-plus-circle me-2"></i>
              Ir al feed
            </Button>
          </div>
        </div>
      </Container>
    </MainLayout>
  );
};

export default ViewProfile;
