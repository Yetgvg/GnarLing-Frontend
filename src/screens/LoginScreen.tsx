import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

function LoginScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/gnarLogin.png')} style={styles.logo} />
      </View>
      <View style={styles.LinePurple}>
        <View style={styles.form}>
          <View>
            <Text style={styles.Titulo}>Gnarlang</Text>
            <Text style={styles.SubTitulo}>Aprenda o chuchubana como ninguém</Text>
          </View>
          <View style={styles.footer}>

            <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate('Cadastro')}>
              <Text style={styles.textBtn1}>Começar agora</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
              <Text style={styles.textBtn2}>Já tenho uma conta</Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingBottom: 20
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: {
    width: 300,
    height: 200,
  },
  LinePurple: {
    backgroundColor: '#8A2BE2',
    paddingTop: 17,
    borderRadius: 30
  },
  form: {
    minHeight: windowHeight * 0.8,
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#EAEAEA',
  },
  Titulo: {
    fontSize: 48,
    alignSelf: 'center',
    color: '#8A2BE2',
  },
  SubTitulo: {
    fontSize: 25,
    textAlign: 'center',
    top: 20,
  },
  footer: {
    alignItems: 'center',
    marginTop: '15%',
    marginBottom: '50%'
  },
  button1: {
    marginTop: '5%',
    backgroundColor: '#8A2BE2',
    width: '90%',
    alignItems: 'center',
    padding: 15,
    borderRadius: 20,
    elevation:10
  },
  textBtn1:{
    color:'white',
    fontSize:22,
  },
  button2: {
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
  textBtn2:{
    color:'#8A2BE2',
    fontSize:22,
  },
});

export default LoginScreen;
