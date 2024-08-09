import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types'; 
import styles from '../Login/LoginStyles';
import { signIn } from '../../config/credenciales';


export const LoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try{
            const user = await signIn(email, password);
            console.log('Usuario registrado:', user);
            navigation.navigate('Home');
        } catch (error){
            console.error('Error al iniciar sesión:', error);
            Alert.alert('Error', 'An unexpected error occurred.');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/img/LC.png')} style={styles.logo} />
            <TextInput
                placeholder="Correo electrónico"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.register}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
};
