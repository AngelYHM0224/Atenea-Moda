import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './InfoStyles'; 
import HomeIcon from '../../../assets/icon/house-solid.svg';
import RobotIcon from '../../../assets/icon/robot-solid.svg';
import InfoIcon from '../../../assets/icon/circle-info-solid.svg';
import UserIcon from '../../../assets/icon/user-solid.svg';

export const InfoScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>happyGPT</Text>
            </View>
            <View style={styles.content}>
                <Text>Bienvenido a HappyGPT</Text>
            </View>
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
