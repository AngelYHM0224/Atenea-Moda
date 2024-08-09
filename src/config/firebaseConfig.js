// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVAOg1i_C7VbifSeu6buOeFDJhxsdf3mM",
    authDomain: "atenea-moda.firebaseapp.com",
    projectId: "atenea-moda",
    storageBucket: "atenea-moda.appspot.com",
    messagingSenderId: "109713952909",
    appId: "1:109713952909:web:5111af5aaf5ef68c8f12c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});


export { app, auth };
