import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = () => {

        if (email === '' || senha === '') {
            Alert.alert("Alerta!!!", "Preencha todos os campos, antes de mandar cadastrar.");
            return;
        }

        const userData = {
            email,
            senha
        }

        axios.post('http://192.168.1.139:3333/users/login', userData)
            .then(response => {
                // console.log(response.data.message);
                const token = response.data.token;
                navigation.navigate('Home',{token})
            })
            .catch(error => {
                if (error.response) {
                    // O servidor respondeu com um status de erro
                    console.error('Erro ao Logar:', error.response.data.message);
                    Alert.alert('Erro', error.response.data.message);
                    navigation.navigate
                } else if (error.request) {
                    // A solicitação foi feita, mas não recebeu resposta
                    console.error('Erro ao fazer a solicitação:', error.request);
                    Alert.alert('Erro', 'Ocorreu um erro ao fazer a solicitação. Por favor, tente novamente.');
                } else {
                    // Ocorreu um erro ao configurar a solicitação
                    console.error('Erro:', error.message);
                    Alert.alert('Erro', 'Ocorreu um erro. Por favor, tente novamente mais tarde.');
                }
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Faça login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#8A2BE2',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default LoginScreen;
