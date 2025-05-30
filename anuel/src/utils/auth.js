// Utilidades para manejar la autenticación en el frontend


import { API_BASE_URL } from './config.js';


export const saveAuthData = (data) => {
  if (data.token) {
    localStorage.setItem('token', data.token);
  }
  
  if (data.accountId) {
    localStorage.setItem('accountId', data.accountId);
  }
  
  if (data.perfilId) {
    localStorage.setItem('perfilId', data.perfilId);
  }
};


export const getToken = () => {
  return localStorage.getItem('token');
};


export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};


export const getAccountId = () => {
  return localStorage.getItem('accountId');
};


export const getProfileId = () => {
  return localStorage.getItem('perfilId');
};


export const hasProfile = () => {
  return !!localStorage.getItem('perfilId');
};


export const clearAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('accountId');
  localStorage.removeItem('perfilId');
};


export const getAuthHeaders = () => {
  const token = getToken();
  
  if (!token) {
    return {};
  }
  
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};


export const fetchWithAuth = async (url, options = {}) => {
  const token = getToken();
  
  if (!token) {
    throw new Error('No hay token de autenticación');
  }
  
  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };
  
  
  
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  
  const response = await fetch(fullUrl, {
    ...options,
    headers
  });
  
  
  if (response.status === 401) {
    clearAuthData();
    window.location.href = '/login';
    throw new Error('Sesión expirada o inválida');
  }
  
  return response;
};
