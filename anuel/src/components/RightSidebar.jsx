import React from 'react';
import { Card } from 'react-bootstrap';

const RightSidebar = () => {
  return (
    <div className="p-3">
      {}
      <Card className="border-0 qubo-shadow-md qubo-rounded-border mb-4">
        <Card.Header className="bg-white fw-bold border-bottom py-3" style={{ color: 'var(--qubo-dark)' }}>
          <h5 className="fw-bold mb-0">Información</h5>
        </Card.Header>
        <Card.Body>
          <p className="text-muted mb-0">
            Explora Qubo interactuando con publicaciones y otros usuarios.
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RightSidebar;
