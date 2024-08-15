import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types';
import styles from './ChatStyles'; 
import HomeIcon from '../../../assets/icon/house-solid.svg';
import CommentIcon from '../../../assets/icon/comment-solid.svg';
import ShoppingIcon from '../../../assets/icon/basket-shopping-solid.svg';
import UserIcon from '../../../assets/icon/user-solid.svg';

export const ChatScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [messages, setMessages] = useState([{text: '¡Hola! ¿En qué te puedo ayudar hoy? ¿Buscas ropa o zapatos?', fromBot: true}]);
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (inputText.trim().length > 0) {
            // Añadir el mensaje del usuario
            const newMessages = [...messages, { text: inputText, fromBot: false }];

            // Añadir respuesta automática del bot
            let botResponse = 'Lo siento, no tengo una respuesta para eso.';
            if (inputText.toLowerCase().includes('ropa')) {
                botResponse = 'Te recomiendo nuestras últimas colecciones de ropa de verano, perfectas para el clima cálido.';
            } else if (inputText.toLowerCase().includes('zapatos')) {
                botResponse = 'Los zapatos deportivos están muy de moda este año. ¿Te gustaría ver algunos modelos?';
            }

            newMessages.push({ text: botResponse, fromBot: true });
            setMessages(newMessages);
            setInputText('');
        }
    };

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Atenea Moda</Text>
            </View>

            {/* Chat Area */}
            <ScrollView style={styles.chatArea}>
                {messages.map((message, index) => (
                    <View 
                        key={index} 
                        style={[styles.messageContainer, message.fromBot ? styles.botMessage : styles.userMessage]}
                    >
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>

            {/* Input Area */}
            <View style={styles.inputArea}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Escribe un mensaje..." 
                    value={inputText}
                    onChangeText={setInputText}
                    placeholderTextColor="#aaa"
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>

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