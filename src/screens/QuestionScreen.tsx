import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import Voice from '@react-native-voice/voice';
import { useToken } from '../context/TokenContext';

const QuestionScreen = ({ route, navigation }: any) => {
    const { lesson } = route.params;
    const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);
    const [isListening, setIsListening] = useState(false);
    const [recognizedText, setRecognizedText] = useState('');

    const { token } = useToken();

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch('http://192.168.1.139:3333/palavras/');
                const data = await response.json();
                // Filtra a resposta correta se ela já estiver nas palavras do backend
                const randomOptions = data.filter((word: { palavra: string }) => word.palavra !== lesson.resposta).map((word: { palavra: string }) => word.palavra);
                // Seleciona as primeiras três opções
                shuffleArray(randomOptions);
                const selectedOptions = randomOptions.slice(0, 3);
                const options = [lesson.resposta, ...selectedOptions];
                shuffleArray(options);
                setShuffledOptions(options);
            } catch (error) {
                console.error('Erro ao buscar palavras:', error);
            }
        };

        fetchWords();
    }, [lesson.resposta]);

    useEffect(() => {
        // Configura o listener para os resultados do reconhecimento de voz
        Voice.onSpeechResults = onSpeechResults;

        return () => {
            // Limpa o listener quando o componente é desmontado
            Voice.destroy().then(Voice.removeAllListeners);
        };
    }, []);

    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const onSpeechResults = (event: any) => {
        // Obtém o texto reconhecido e atualiza o estado
        setRecognizedText(event.value[0]);
    };

    const toggleListening = async () => {
        try {
            if (isListening) {
                // Para o reconhecimento de voz
                await Voice.stop();
                setIsListening(false);
                // Exibe o texto reconhecido em um alert
                Alert.alert('Texto Reconhecido', recognizedText, [
                    {
                        text: 'OK',
                        onPress: () => {
                            // Processa a resposta reconhecida
                            handleOptionPress(recognizedText);
                        }
                    }
                ]);
            } else {
                // Inicia o reconhecimento de voz com o idioma desejado
                await Voice.start('pt-BR');
                setIsListening(true);
            }
        } catch (e) {
            console.error('Erro ao controlar o reconhecimento de voz:', e);
        }
    };

    const handleOptionPress = async (option: string) => {
        // Lógica para verificar a resposta reconhecida

        console.log(option+' == '+lesson.resposta)
        if (option === lesson.resposta) {
            try {
                const response = await fetch(`http://192.168.1.139:3333/users/${token?.id}/progress/${lesson.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (response.ok) {
                    // Mostra uma mensagem de sucesso para o usuário
                    Alert.alert('Correto!', 'Você acertou a resposta e seu progresso foi atualizado.',
                        [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
                    );
                } else {
                    // Se houver algum problema com a requisição, exibe uma mensagem de erro
                    Alert.alert('Erro!', 'Ocorreu um erro ao atualizar o seu progresso.', [{ text: 'OK' }]);
                }
            } catch (error) {
                // Se houver um erro na requisição, exibe uma mensagem de erro
                Alert.alert('Erro!', 'Ocorreu um erro ao atualizar o seu progresso.', [{ text: 'OK' }]);
                console.error('Erro ao atualizar o progresso:', error);
            }
        } else {
            const newErrorCount = errorCount + 1;
            setErrorCount(newErrorCount);

            if (newErrorCount >= 3) {
                Alert.alert(
                    'Errado!',
                    'Você atingiu o limite de erros. Voltando para a tela Home.',
                    [{ text: 'OK', onPress: () => navigation.navigate('Home') }]
                );
            } else {
                Alert.alert('Errado!', 'Você errou a resposta. Tente novamente.', [{ text: 'OK' }]);
            }
        }
    };

    return (
        <View>
            <Image source={require('../assets/GnarEsperando.png')} style={styles.logo} />
            {lesson.tipo == '1' ? (
                <View>
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
            ) : (
                <View>
                    <Text style={styles.Titulo}>Translate the sentence:</Text>
                    <Text style={styles.questionText}>{lesson.questao}</Text>
                    <View style={styles.optionsContainer}>
                        {/* Botão para iniciar/parar o reconhecimento de voz */}
                        <TouchableOpacity style={styles.voiceButton} onPress={toggleListening}>
                            <Text style={styles.buttonText}>{isListening ? 'Parar' : 'Falar'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
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
    voiceButton: {
        backgroundColor: '#8A2BE2',
        padding: 10,
        marginVertical: 10,
        borderRadius: 10,
        marginLeft: '25%',
        width: '45%',
        height: '45%',
        alignItems: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        marginTop: '20%',
    },
});

export default QuestionScreen;
