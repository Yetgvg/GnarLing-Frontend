// CadastroScreen.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CadastroProps {
  route: any; // ou o tipo correto do seu route object
}

const CadastroScreen: React.FC<CadastroProps> = ({ route }) => {
  const { selectedLanguage } = route.params;

  return (
    <View style={styles.container}>
      <Text>Você escolheu o idioma: {selectedLanguage}</Text>
      {/* Resto do conteúdo do cadastro */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CadastroScreen;
