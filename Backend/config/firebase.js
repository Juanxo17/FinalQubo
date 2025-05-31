import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import dotenv from 'dotenv';

dotenv.config();

let adminAuth = null;

try {
  // Solo inicializar Firebase si todas las variables están disponibles
  if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
    const serviceAccount = {
      type: "service_account",
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
    };

    const firebaseApp = initializeApp({
      credential: cert(serviceAccount),
      projectId: serviceAccount.project_id, 
    });

    adminAuth = getAuth(firebaseApp);
    console.log('Firebase initialized successfully');
  } else {
    console.warn('Firebase variables not found, Firebase authentication disabled');
  }
} catch (error) {
  console.error('Error initializing Firebase:', error.message);
  console.warn('Continuing without Firebase authentication');
}

export default adminAuth;
