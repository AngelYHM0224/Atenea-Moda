import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './StoreStyles'; 
import HomeIcon from '../../../assets/icon/house-solid.svg';
import CommentIcon from '../../../assets/icon/comment-solid.svg';
import ShoppingIcon from '../../../assets/icon/basket-shopping-solid.svg';
import UserIcon from '../../../assets/icon/user-solid.svg';

export const StoreScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            {/* Header */}  
            <View style={styles.header}>
                <Text style={styles.title}>Atenea Moda</Text>
            </View>

            {/* Product Section */}
            <ScrollView style={styles.productsContainer}>
                <View style={styles.productCard}>
                    <Image 
                        style={styles.productImage} 
                        source={require('../../../assets/img/ven.jpeg')} 
                    />
                    <Text style={styles.productTitle}>Minimalist Dress</Text>
                    <Text style={styles.productPrice}>$150</Text>
                </View>

                <View style={styles.productCard}>
                    <Image 
                        style={styles.productImage} 
                        source={require('../../../assets/img/ven1.jpeg')} 
                    />
                    <Text style={styles.productTitle}>Party Shoes</Text>
                    <Text style={styles.productPrice}>$50</Text>
                </View>

                <View style={styles.productCard}>
                    <Image 
                        style={styles.productImage} 
                        source={require('../../../assets/img/ven2.jpeg')} 
                    />
                    <Text style={styles.productTitle}>Dark Jacket</Text>
                    <Text style={styles.productPrice}>$40</Text>
                </View>

                <View style={styles.productCard}>
                    <Image 
                        style={styles.productImage} 
                        source={require('../../../assets/img/ven3.jpeg')} 
                    />
                    <Text style={styles.productTitle}>Casual Sneakers</Text>
                    <Text style={styles.productPrice}>$80</Text>
                </View>
            </ScrollView>

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
