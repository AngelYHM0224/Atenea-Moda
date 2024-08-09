import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
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
    chatArea: {
        flex: 1,
        padding: 10,
    },
    messageContainer: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#d7bde2',
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#8e44ad',
    },
    messageText: {
        color: '#fff',
    },
    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    input: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#8e44ad',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    sendButtonText: {
        color: '#fff',
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