import React from 'react';

const BienvenidaSlide = ({ onNext }) => {
  return (
    <div className="qubo-slide">
      <div className="qubo-slide-header">
        <h1 className="qubo-slide-title">¡Bienvenido a Qubo!</h1>
        <p className="qubo-slide-subtitle">
          Estás a unos cuantos pasos de completar tu perfil y comenzar a descubrir qué hay de nuevo en Qubo.
        </p>
      </div>
      
      <div className="qubo-slide-content">
        <img 
          src="/user-default.svg" 
          alt="Qubo Profile" 
          className="img-fluid mb-4" 
          style={{ maxWidth: '120px', opacity: '0.8' }} 
        />
        <p className="mb-4">
          Configuraremos tu perfil para que puedas conectarte con otros usuarios,
          compartir tus ideas y encontrar contenido que te interese.
        </p>
      </div>
      
      <div className="qubo-slide-actions">
        <div></div> {}
        <button
          onClick={onNext}
          className="btn btn-primary qubo-hover-effect"
        >
          <i className="bi bi-arrow-right-circle me-2"></i>
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default BienvenidaSlide;
