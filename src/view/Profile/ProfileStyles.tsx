import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    header: {
        width: '100%',
        padding: 10,
        backgroundColor: '#8e44ad',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
    greeting: {
        fontSize: 18,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    menuContainer: {
        width: '100%',
        paddingHorizontal: 20, // Añadido para dar un poco de margen
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
        backgroundColor: '#f9f9f9',
    },
    menuText: {
        marginLeft: 10,
        fontSize: 18,
    },
    footer: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#8e44ad',
    },
});