import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './HomeStyles'; 
import HomeIcon from '../../../assets/icon/house-solid.svg';
import CommentIcon from '../../../assets/icon/comment-solid.svg';
import InfoIcon from '../../../assets/icon/circle-info-solid.svg';
import UserIcon from '../../../assets/icon/user-solid.svg';

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Atenea Moda</Text>
            </View>

            {/* Search Bar */}
            <View style={styles.searchBarContainer}>
                <TextInput 
                    style={styles.searchBar} 
                    placeholder="Buscar un artículo" 
                    placeholderTextColor="#aaa"
                />
            </View>

            {/* Banner */}
            <View style={styles.bannerContainer}>
                <Image 
                    style={styles.bannerImage} 
                    source={require('../../../assets/img/images (1).jpeg')} 
                />
                <View style={styles.bannerTextContainer}>
                    <Text style={styles.bannerTitle}>La mejor moda para tu famila</Text>
                    <TouchableOpacity style={styles.readMoreButton}>
                        <Text style={styles.readMoreText}>Seguir leyendo</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Popular Fashion */}
            <View style={styles.popularFashionContainer}>
                <Text style={styles.sectionTitle}>Moda popular</Text>
                <View style={styles.cardsContainer}>
                    {/* Minimalist */}
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={require('../../../assets/img/ven.jpeg')} />
                        <Text style={styles.cardTitle}>Pans</Text>
                        <Text style={styles.cardPrice}>$150</Text>
                    </View>
                    {/* Party */}
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={require('../../../assets/img/ven1.jpeg')} />
                        <Text style={styles.cardTitle}>Conjunto de Primavera</Text>
                        <Text style={styles.cardPrice}>$50</Text>
                    </View>
                    {/* Dark */}
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={require('../../../assets/img/ven2.jpeg')} />
                        <Text style={styles.cardTitle}>Suerte</Text>
                        <Text style={styles.cardPrice}>$40</Text>
                    </View>
                    {/* Casual */}
                    <View style={styles.card}>
                        <Image style={styles.cardImage} source={require('../../../assets/img/ven3.jpeg')} />
                        <Text style={styles.cardTitle}>Casual</Text>
                        <Text style={styles.cardPrice}>$80</Text>
                    </View>
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <HomeIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <CommentIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <InfoIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <UserIcon width={30} height={30} fill="#fff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
