import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert } from 'react-native';

function CadastroScreen({ route, navigation }: any) {
  const { Idioma } = route.params;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [idioma_aprendendo_id, setIdiomaAprendendo] = useState(Idioma);

  const NomeIdioma = Idioma === '2' ? 'Inglês' : 'Chuchubana';

  const handleCadastro = () => {
    if (nome === '' || email === '' || senha === '') {
      Alert.alert("Alerta!!!", "Preencha todos os campos, antes de mandar cadastrar.");
      return;
    }

    const userData = {
      nome,
      email,
      senha,
      idioma_nativo_id: 1,
      idioma_aprendendo_id
    }

    axios.post('http://192.168.1.139:3333/users/Cadastrar', userData)
      .then(response => {
        console.log(response.data.message);
        navigation.navigate('Login')
      })
      .catch(error => {
        if (error.response) {
          // O servidor respondeu com um status de erro
          console.error('Erro ao cadastrar:', error.response.data.message);
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
    <View>
      <View style={styles.ImageStyle}>
        <Image source={require('../assets/GnarFinishCadastro.png')} />
      </View>
      <View style={styles.LinePurple}></View>
      <View style={styles.ViewForm}>
        <Text>Você escolheu o idioma: {NomeIdioma}</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <View style={styles.ViewCadastrar}>
        <TouchableOpacity style={styles.BtnCadastrar} onPress={handleCadastro}>
          <Text style={styles.textContinuar}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: { alignItems: 'center', justifyContent: 'center', marginTop: '10%' },

  LinePurple: { borderBottomColor: '#8A2BE2', borderBottomWidth: 30, marginVertical: 10 },

  input: {
    width: '80%', borderWidth: 1, borderColor: '#8A2BE2', borderRadius: 5, marginTop: 10,
    paddingHorizontal: 10
  },

  ViewCadastrar: { alignItems: 'center', justifyContent: 'center', marginTop: '25%' },

  ViewForm: { alignItems: 'center', justifyContent: 'center', marginTop: '10%' },

  BtnCadastrar: {
    marginTop: '5%', backgroundColor: '#8A2BE2', width: '90%', alignItems: 'center', padding: 15, borderRadius: 20,
    elevation: 10
  },

  textContinuar: { color: 'white', fontSize: 22, },
});

export default CadastroScreen;

