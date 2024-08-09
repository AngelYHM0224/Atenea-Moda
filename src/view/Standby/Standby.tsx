import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../types";
import styles from "./StandbyStyles";

export const StandbyScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
    }, [navigation]);

    return (
    <View style={styles.container}>
        <Image source={require('../../../assets/img/LC.png')} style={styles.logo} />
    </View>
    );
};
