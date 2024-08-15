// UserContext.js
import React, { createContext, useState, ReactNode, useEffect } from 'react';
import { auth } from '../config/firebaseConfig'; // Importa auth desde tu configuración de Firebase
import { onAuthStateChanged } from 'firebase/auth';

interface User {
    name: string;
    email: string;
    phone: string;
    password: string;
    dob: string;
    city: string;
}

export interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    loadUserData: () => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({
        name: '',
        email: '',
        phone: '',
        password: '',
        dob: '',
        city: '',
    });

    const loadUserData = () => {
        const currentUser = auth.currentUser;
        if (currentUser) {
            setUser(prevUser => ({
                ...prevUser,
                email: currentUser.email || '',
            }));
            // Aquí puedes agregar más lógica para cargar otros datos del usuario desde Firestore si es necesario
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                loadUserData();
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, loadUserData }}>
            {children}
        </UserContext.Provider>
    );
};
