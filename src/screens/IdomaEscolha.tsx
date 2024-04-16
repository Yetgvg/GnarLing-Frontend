import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const IdiomaEscolha: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };
  
  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
        <Image source={require('../assets/GnarMascote.png')} />
      </View>
      <View style={styles.LinePurple}></View>
      <View style={styles.FormButtons}>
        <TouchableOpacity
          style={[styles.button, selectedLanguage === 'Inglês' && styles.selectedButton]}
          onPress={() => handleLanguageSelect('Inglês')}
        >
          <Image source={require('../assets/EUA_Flag.png')} />
          <Text style={[styles.textBtn, selectedLanguage === 'Inglês' && styles.selectedText]}>Inglês</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedLanguage === 'Chuchubana' && styles.selectedButton]}
          onPress={() => handleLanguageSelect('Chuchubana')}
        >
          <Image source={require('../assets/Gnar_Flag.png')} />
          <Text style={[styles.textBtn, selectedLanguage === 'Chuchubana' && styles.selectedText]}>Chuchubana</Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '25%' }}>
        <TouchableOpacity style={styles.buttonContinuar} disabled={!selectedLanguage}>
          <Text style={styles.textContinuar}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  LinePurple: {
    borderBottomColor: '#8A2BE2',
    borderBottomWidth: 30,
    marginVertical: 10
  },
  button: {
    flexDirection: 'row',
    marginTop: '5%',
    backgroundColor: '#EAEAEA',
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#8A2BE2',
    elevation: 10
  },
  selectedButton: {
    backgroundColor: '#8A2BE2',
  },
  textBtn: {
    color: '#8A2BE2',
    fontSize: 22,
    marginLeft: 10,
  },
  selectedText: {
    color: 'white',
  },
  FormButtons: {
    alignItems: 'center',
  },
  buttonContinuar: {
    marginTop: '5%',
    backgroundColor: '#8A2BE2',
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    elevation: 10
  },
  textContinuar: {
    color: 'white',
    fontSize: 22,
  },
});

export default IdiomaEscolha;
