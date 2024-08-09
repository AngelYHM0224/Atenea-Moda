import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
        header: {
        backgroundColor: '#FFA500',
        padding: 20,
        alignItems: 'center',
    },
        title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',
    },
        profileSection: {
        alignItems: 'center',
        marginVertical: 20,
    },
        
    avatarText: {
        fontSize: 50,
    },
        greeting: {
        fontSize: 18,
    },
        name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
        menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
        menuText: {
        marginLeft: 10,
        fontSize: 18,
    },
        footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFA500',
        padding: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%'
        }
});
