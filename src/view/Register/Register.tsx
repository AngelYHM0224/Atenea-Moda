import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './RegisterStyles';
import { signUp } from '../../config/credenciales';

export const RegisterScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if(password.length < 6){
            Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
            return;
        }
        try{
            const user = await signUp(email, password);
            console.log('Usuario registrado', user);
            navigation.navigate('Home');
        }catch (error){
            console.error('Error al registrarse:', error);
            Alert.alert('Error', 'Se ha producido un error inesperado.');
        }
    }
    return (
    <View style={styles.container}>
        <Image source={require('../../../assets/img/LC.png')} style={styles.logo} />
        <TextInput
                placeholder="Nombre Completo"
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                placeholder="Correo Electrónico"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry={true}
                style={styles.input}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.registerButtonText}>Crear</Text>
            </TouchableOpacity>
    </View>
);
};
