import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './ProfileStyles'; 
import HomeIcon from '../../../assets/icon/house-solid.svg';
import RobotIcon from '../../../assets/icon/robot-solid.svg';
import InfoIcon from '../../../assets/icon/circle-info-solid.svg';
import UserIcon from '../../../assets/icon/user-solid.svg';

export const ProfileScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 

    return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>happyGPT</Text>
        </View>
        <View style={styles.profileSection}>
        <View style={styles.logo}>
            <Image source={require('../../../assets/img/LC.png')} style={styles.logo} />
        </View>
        <Text style={styles.greeting}>¡Hola!</Text>
        <Text style={styles.name}>Angel</Text>
    </View>
    <View style={styles.menuItem}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <UserIcon width={30} height={30} />
    </TouchableOpacity>
        <Text style={styles.menuText}>Datos Personales</Text>
    </View>
    <TouchableOpacity style={styles.menuItem}>
        <Text style={styles.menuText}>Cerra Sesión</Text>
    </TouchableOpacity>
    <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <HomeIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <RobotIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <InfoIcon width={30} height={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <UserIcon width={30} height={30} />
        </TouchableOpacity>
    </View>
    </View>
);
};




