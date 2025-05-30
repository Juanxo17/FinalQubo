// Configuración global para la aplicación


export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';


export const REQUEST_TIMEOUT = 15000; 


export const MAX_UPLOAD_SIZE = 5 * 1024 * 1024; 


export const DEFAULT_PROFILE_IMAGE = '/user-default.svg';
