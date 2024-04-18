import { jwtDecode } from 'jwt-decode';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ route, navigation }: any) => {

    const { token } = route.params;

    // useEffect(() => {
    //     const decodedToken = jwtDecode(token);
    //     console.log(decodedToken);
    // }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo {token.nome} à Página Inicial</Text>
            <TouchableOpacity style={styles.BtnCadastrar} onPress={() => navigation.navigate('Index')}>
                <Text style={styles.textContinuar}>Sair</Text>
            </TouchableOpacity>
            <View style={styles.ViewCadastrar}>
                <Image source={require('../assets/GnarHi.gif')} />
            </View>
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    
    title: { fontSize: 15, fontWeight: 'bold', marginBottom: 20 },

    ViewCadastrar: { alignItems: 'center', justifyContent: 'center', marginTop: '25%' },

    BtnCadastrar: {
        marginTop: '5%', backgroundColor: '#8A2BE2', width: '50%', alignItems: 'center', padding: 5, borderRadius: 20,
        elevation: 10
    },

    textContinuar: { color: 'white', fontSize: 22, },
});

export default HomeScreen;
