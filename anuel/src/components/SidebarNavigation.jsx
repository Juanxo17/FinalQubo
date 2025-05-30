import React from 'react';
import { useNavigate } from 'react-router-dom';
import TreeNavigation from './TreeNavigation';
import NotificationCenter from './NotificationCenter';

const SidebarNavigation = ({ username }) => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column h-100">
      {}      <div className="p-3 border-bottom qubo-shadow-sm">
        <div className="d-flex justify-content-between align-items-center">
          <h1 
            className="h3 fw-bold mb-0 qubo-hover-effect" 
            style={{ cursor: 'pointer', color: 'var(--qubo-primary)' }} 
            onClick={() => navigate('/feed')}
          >
            <i className="bi bi-chat-square-text-fill me-2"></i>
            Qubo
          </h1>
          <NotificationCenter />
        </div>
      </div>

      {}
      <div className="p-3 flex-grow-1 overflow-auto">
        <TreeNavigation />
      </div>
      
      {}
      <div className="border-top p-3 mt-auto" style={{ backgroundColor: 'var(--qubo-light)' }}>
        <div className="d-flex align-items-center qubo-hover-effect" style={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>
          <div 
            className="rounded-circle d-flex align-items-center justify-content-center me-2 qubo-shadow-sm"
            style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: 'var(--qubo-secondary)',
              color: 'var(--qubo-white)'
            }}
            aria-label="Avatar"
          >
            <span className="fw-bold fs-6">
              {username ? username.charAt(0).toUpperCase() : "Q"}
            </span>
          </div>
          <div className="d-flex flex-column">
            <span className="fw-semibold" style={{ color: 'var(--qubo-dark)' }}>
              {username || "Usuario"}
            </span>
            <span className="small text-muted">
              @{username?.toLowerCase() || "usuario"}
            </span>
          </div>
          <i className="bi bi-three-dots-vertical ms-auto" style={{ color: 'var(--qubo-gray-dark)' }}></i>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
