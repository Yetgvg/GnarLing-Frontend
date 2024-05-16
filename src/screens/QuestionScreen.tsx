import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const QuestionScreen = ({ route, navigation }: any) => {
    const { lesson } = route.params;
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);

    useEffect(() => {
        // Embaralhe as opções de resposta
        const options = [lesson.resposta, ...generateRandomOptions(lesson.resposta)];
        shuffleArray(options);
        setShuffledOptions(options);
    }, []);

    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const generateRandomOptions = (answer: string) => {
        // Aqui você pode implementar a lógica para gerar opções de resposta aleatórias
        // Por exemplo, você pode pegar palavras de um dicionário ou gerar palavras aleatórias
        // Neste exemplo simples, estamos apenas repetindo a resposta algumas vezes
        const randomOptions = [];
        for (let i = 0; i < 3; i++) {
            randomOptions.push(answer.toUpperCase());
        }
        return randomOptions;
    };

    const handleOptionPress = (option: string) => {
        // Implemente a lógica para verificar se a opção selecionada está correta
        console.log('Opção selecionada:', option);
    };

    return (
        <View>
            <Image source={require('../assets/GnarEsperando.png')} style={styles.logo} />
            <Text style={styles.Titulo}>Complete the sentence:</Text>
            <Text style={styles.questionText}>{lesson.questao}</Text>
            <View style={styles.optionsContainer}>
                {shuffledOptions.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleOptionPress(option)}>
                        <Text style={styles.optionText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    questionText: {
        fontSize: 20,
        textAlign: 'center',
    },
    Titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '5%',
        marginBottom: '10%'
    },
    logo: {
        width: '60%',
        height: '50%',
        marginLeft: '20%'
    },
    optionsContainer: {
        marginTop: '5%'
    },
    optionButton: {
        backgroundColor: '#8A2BE2',
        padding: 5,
        marginVertical: 5,
        borderRadius: 10,
        minWidth: '50%',
        alignItems: 'center',
        marginHorizontal: 10
    },
    optionText: {
        color: 'white',
        fontSize: 16,
    },
});

export default QuestionScreen;
