import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CadastroScreen: React.FC = () => {
  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '10%' }}>
        <Image source={require('../assets/GnarMascote.png')} />
      </View>
      <View style={styles.LinePurple}>
      </View>
      <View style={styles.FormButtons}>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/EUA_Flag.png')} />
          <Text style={styles.textBtn}>Inglês</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={require('../assets/Gnar_Flag.png')} />
          <Text style={styles.textBtn}>Chuchubana</Text>
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
    borderWidth:1,
    borderColor:'#8A2BE2',
    elevation:10
  },
  textBtn:{
    color:'#8A2BE2',
    fontSize:22,
    marginLeft: 10,
  },
  FormButtons: {
    alignItems: 'center',
  },
});

export default CadastroScreen;
