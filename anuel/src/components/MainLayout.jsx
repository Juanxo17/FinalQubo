import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SidebarNavigation from './SidebarNavigation';
import NotificationCenter from './NotificationCenter';


const MainLayout = ({ children, username }) => {
  return (    <Container fluid className="px-0 h-100">
      <Row className="h-100 g-0">          {}
        <Col md={3} lg={2} className="sidebar-col d-none d-md-flex flex-column position-fixed bg-white shadow-sm h-100" style={{ borderRight: '1px solid var(--qubo-gray-light)' }}>
          <SidebarNavigation username={username} />
        </Col>
        
        {}        <div className="d-md-none"><div className="bg-white p-3 d-flex justify-content-between align-items-center mb-3 shadow-sm position-sticky top-0" style={{ zIndex: 1020 }}>
            <h1 className="h4 fw-bold text-primary mb-0 d-flex align-items-center" style={{ cursor: 'pointer' }} onClick={() => window.location.href = '/feed'}>
              <span className="me-2" style={{ fontSize: '28px' }}>Q</span>
              Qubo
            </h1>
            <div className="d-flex align-items-center">
              <NotificationCenter />
              <button
                className="btn btn-light rounded-circle ms-2" 
                type="button" 
                data-bs-toggle="offcanvas" 
                data-bs-target="#mobileSidebar" 
                aria-controls="mobileSidebar"
                style={{ width: '40px', height: '40px', padding: '0' }}
              >
                <i className="bi bi-list fs-4"></i>
              </button>
            </div>
          </div>
          
          <div 
            className="offcanvas offcanvas-start shadow" 
            tabIndex="-1" 
            id="mobileSidebar" 
            aria-labelledby="mobileSidebarLabel"
          >
            <div className="offcanvas-header border-bottom">
              <h5 
                className="offcanvas-title fw-bold text-primary d-flex align-items-center" 
                id="mobileSidebarLabel"
                style={{ cursor: 'pointer' }} 
                onClick={() => {
                  window.location.href = '/feed';
                  
                  const offcanvasElement = document.getElementById('mobileSidebar');
                  const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);
                  if (offcanvasInstance) {
                    offcanvasInstance.hide();
                  }
                }}
              >
                <span className="me-2" style={{ fontSize: '22px' }}>Q</span>
                Qubo
              </h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body pt-3">
              <SidebarNavigation username={username} />
            </div>
          </div>
        </div>
        
        {}
        <Col xs={12} md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }} className="main-content p-0 bg-light">
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default MainLayout;
