import React from 'react';
import { View, Text, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './ProfileStyles'; 
import HomeIcon from '../../../assets/icon/house-solid.svg';
import CommentIcon from '../../../assets/icon/comment-solid.svg';
import ShoppingIcon from '../../../assets/icon/basket-shopping-solid.svg';
import UserIcon from '../../../assets/icon/user-solid.svg';

export const ProfileScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Atenea Moda</Text>
        </View>
        <View style={styles.profileSection}>
        <View style={styles.logo}>
            <Image source={require('../../../assets/img/LC.png')} style={styles.logo} />
        </View>
        <Text style={styles.greeting}>¡Hola!</Text>
        <Text style={styles.name}>Mariana</Text>
    </View>
    <View style={styles.menuItem}>
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <UserIcon width={30} height={30} />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('EditData')}>
            <Text style={styles.menuText}>Datos Personales</Text>
    </TouchableOpacity>
    </View>
    <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.menuText}>Cerra Sesión</Text>
    </TouchableOpacity>
            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <HomeIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <CommentIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Store')}>
                    <ShoppingIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <UserIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default ProfileScreen;
