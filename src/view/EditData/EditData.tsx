import React, { useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './EditDataStyles';
import HomeIcon from '../../../assets/icon/house-solid.svg';
import RobotIcon from '../../../assets/icon/robot-solid.svg';
import ShoppingIcon from '../../../assets/icon/basket-shopping-solid.svg';
import UserIcon from '../../../assets/icon/user-solid.svg';
import { UserContext, UserContextType } from '../../contexts/UserContext';

export const EditDataScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const userContext = useContext<UserContextType | undefined>(UserContext);

    if (!userContext) {
        return null; // O muestra algún mensaje de error
    }

    const { user, setUser, loadUserData } = userContext;

    useEffect(() => {
        loadUserData();
    }, []);

    const saveChanges = () => {
        console.log('Datos guardados:', user);
        // Aquí puedes agregar la lógica para guardar los datos actualizados en Firestore
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Atenea Moda</Text>
            </View>
            <Text style={styles.sectionTitle}>Datos Personal</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Nombre completo</Text>
                <TextInput 
                    style={styles.input} 
                    value={user.name} 
                    onChangeText={(text) => setUser({ ...user, name: text })}
                />
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput 
                    style={styles.input} 
                    value={user.email} 
                    onChangeText={(text) => setUser({ ...user, email: text })} 
                    keyboardType="email-address" 
                />
                <Text style={styles.label}>Fecha de Nacimiento</Text>
                <TextInput 
                    style={styles.input} 
                    value={user.dob} 
                    onChangeText={(text) => setUser({ ...user, dob: text })}
                />
                <Text style={styles.label}>Ciudad, Pais</Text>
                <TextInput 
                    style={styles.input} 
                    value={user.city} 
                    onChangeText={(text) => setUser({ ...user, city: text })}
                />
                <TouchableOpacity style={styles.saveButton} onPress={saveChanges}>
                    <Text style={styles.saveButtonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <HomeIcon width={30} height={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <RobotIcon width={30} height={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Store')}>
                    <ShoppingIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <UserIcon width={30} height={30} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default EditDataScreen;
