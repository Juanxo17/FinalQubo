import React from 'react';
import { useProfile } from '../../context/ProfileContext';
import BienvenidaSlide from './BienvenidaSlide';
import NombreSlide from './NombreSlide';
import UsernameSlide from './UsernameSlide';
import BiografiaSlide from './BiografiaSlide';
import FotoPerfilSlide from './FotoperfilSlide';
import FinalSlide from './SalidaSlide';

const SlideManager = () => {
  const { currentSlide, nextSlide, prevSlide } = useProfile();

  const slideComponents = {
    Bienvenida: <BienvenidaSlide onNext={nextSlide} />,
    Nombre: <NombreSlide onNext={nextSlide} onBack={prevSlide} />,
    Username: <UsernameSlide onNext={nextSlide} onBack={prevSlide} />,
    Biografia: <BiografiaSlide onNext={nextSlide} onBack={prevSlide} />,
    FotoPerfil: <FotoPerfilSlide onNext={nextSlide} onBack={prevSlide} />,
    Salida: <FinalSlide onBack={prevSlide} />,
  };

  if (!currentSlide) return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  );

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex justify-content-center align-items-center py-5">
      <div className="row w-100 justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-7">
          {slideComponents[currentSlide.value] || (
            <div className="alert alert-danger">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              Slide no encontrado
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlideManager;
