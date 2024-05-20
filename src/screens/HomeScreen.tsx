import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import LessonMap from '../components/LessonMap';

const HomeScreen = ({ route, navigation }: any) => {

    const [lessons, setLessons] = useState<string[]>([]);
    const { token } = route.params;
    console.log(token)

    useEffect(() => {
        const fetchLessons = async () => {
            try {
                const response = await fetch(`http://192.168.1.139:3333/licao/idioma/${token.Idioma.id}`);
                const data = await response.json();
                // Supondo que a resposta do backend seja um array de strings
                setLessons(data);
            } catch (error) {
                console.error('Erro ao buscar as lições:', error);
            }
        };

        // Chamando a função para buscar as lições ao montar o componente
        fetchLessons();
    }, []);

    const handlePressLesson = (lesson: string) => {
        navigation.navigate('Question', { lesson });
    };

    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>Mapa de Lições</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.Box}>
                    <LessonMap lessons={lessons} onPressLesson={handlePressLesson} />
                </View>
            </ScrollView>
        </View>
    );
};

// Estilos
const styles = StyleSheet.create({
    Box: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    scrollContainer: { flexGrow: 1, justifyContent: 'center', },
    BtnCadastrar: {
        marginVertical: '5%', backgroundColor: '#8A2BE2', width: '50%', alignItems: 'center', padding: 5, borderRadius: 20,
        elevation: 10
    },
    textContinuar: { color: 'white', fontSize: 22, },
    Title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center'
    },
    Container: {backgroundColor: "#FFF"}
});

export default HomeScreen;
