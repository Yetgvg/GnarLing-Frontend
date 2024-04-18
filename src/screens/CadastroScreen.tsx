import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function CadastroScreen({ route, navigation }: any) {
  const { Idioma } = route.params;

  return (
    <View>
      {/* <Text>Você escolheu o idioma: {Idioma}</Text> */}
      <View style={styles.ImageStyle}>
        <Image source={require('../assets/GnarMascote.png')} />
      </View>
      <View style={styles.LinePurple}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: { alignItems: 'center', justifyContent: 'center', marginTop: '10%' },

  LinePurple: { borderBottomColor: '#8A2BE2', borderBottomWidth: 30, marginVertical: 10 },

  
});

export default CadastroScreen;
