import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
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
    productsContainer: {
        width: '100%',
        padding: 10,
    },
    productCard: {
        width: '100%',
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
        padding: 15,
    },
    productImage: {
        width: 120,
        height: 120,
        marginBottom: 10,
    },
    productTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    productPrice: {
        fontSize: 14,
        color: '#6c757d',
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
