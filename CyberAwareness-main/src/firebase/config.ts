import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

export const firebaseAuthConfigured = Boolean(
  apiKey &&
    authDomain &&
    projectId &&
    storageBucket &&
    messagingSenderId &&
    appId
);

let app: FirebaseApp | null = null;
let firebaseAuth: Auth | null = null;

if (firebaseAuthConfigured) {
  app = initializeApp(firebaseConfig);
  firebaseAuth = getAuth(app);
} else {
  console.warn(
    "Firebase is not configured. Set VITE_FIREBASE_* environment variables to enable auth."
  );
}

export const auth = firebaseAuth;
export const firebaseApp = app;