import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCslV0Osm-yTjWcAArjj5xQ5YNysqr8P-Q",
    authDomain: "atenea-mod.firebaseapp.com",
    projectId: "atenea-mod",
    storageBucket: "atenea-mod.appspot.com",
    messagingSenderId: "173854226031",
    appId: "1:173854226031:web:4e3db013dfa325c0cfbf9a",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage) // Configura la persistencia
});

export { app, auth };
export default firebaseConfig;
