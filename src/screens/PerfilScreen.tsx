import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useToken } from '../context/TokenContext';

const PerfilScreen = ({ navigation }: any) => {
    const [userData, setUserData] = useState<any>(null);
    const [totalScore, setTotalScore] = useState(0);
    const { token } = useToken();
    console.log(token)

    const fetchUserData = async () => {
        try {
            const response = await fetch(`http://192.168.1.139:3333/users/email/${token?.email}`);
            const data = await response.json();
            setUserData(data);
            setTotalScore(calculateTotalScore(data.progresso));
        } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchUserData();
        }, [])
    );

    const handleLogout = () => {
        navigation.navigate('Index');
        console.log('Usuário deslogado');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Perfil do Usuário</Text>
            {userData && (
                <View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.label}>Nome:</Text>
                        <Text style={styles.value}>{userData.nome}</Text>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>{userData.email}</Text>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.label}>Idoma nativo:</Text>
                        <Text style={styles.value}>{userData.idioma_nativo_id.nome}</Text>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.label}>Idoma aprendendo:</Text>
                        <Text style={styles.value}>{userData.idioma_aprendendo_id.nome}</Text>
                    </View>
                    <View style={styles.profileInfo}>
                        <Text style={styles.label}>Progresso:</Text>
                        <Text style={styles.value}>{totalScore} pontos</Text>
                    </View>
                </View>
            )}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <Text style={styles.logoutText}>Deslogar</Text>
            </TouchableOpacity>
        </View>
    );
};

const calculateTotalScore = (progresso: any) => {
    let totalScore = 0;
    Object.values(progresso).forEach((lesson: any) => {
        if (lesson.completed) {
            totalScore += lesson.score;
        }
    });
    return totalScore;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: 20,
        height: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    profileInfo: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 10,
    },
    value: {
        fontSize: 20,
        flex: 1,
    },
    logoutButton: {
        backgroundColor: '#8A2BE2',
        padding: 15,
        borderRadius: 10,
        marginTop: 'auto', // Altera para garantir que o botão fique no final
        alignItems: 'center',
    },
    logoutText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PerfilScreen;
