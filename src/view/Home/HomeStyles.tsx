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
    searchBarContainer: {
        width: '90%',
        marginTop: 10,
        alignSelf: 'center',
    },
    searchBar: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
    },
    bannerContainer: {
        width: '100%',
        marginVertical: 20,
        alignItems: 'center',
    },
    bannerImage: {
        width: '90%',
        height: 150,
        borderRadius: 10,
    },
    bannerTextContainer: {
        position: 'absolute',
        top: 30,
        left: 30,
    },
    bannerTitle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
    },
    readMoreButton: {
        marginTop: 10,
        backgroundColor: '#6c757d',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },
    readMoreText: {
        color: '#fff',
        fontSize: 14,
    },
    popularFashionContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        width: '23%',
        backgroundColor: '#f8f9fa',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
    },
    cardImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardPrice: {
        fontSize: 12,
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
    icon: {
        color: '#fff',
    },
});