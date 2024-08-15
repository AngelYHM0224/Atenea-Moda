import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        
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
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 15,
        color: '#333',
        textAlign: 'center'
    },
    editButton: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    editButtonText: {
        color: '#FFA500',
        fontWeight: 'bold',
    },
    form: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        backgroundColor: '#FFF',
        fontSize: 16,
        color: '#333',
    },
    saveButton: {
        backgroundColor: '#FFA500',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
        width: '50%',
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFA500',
        padding: 15,
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
});