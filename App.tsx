import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import IndexScreen from './src/screens/IndexScreen';
import IdiomaEscolha from './src/screens/IdomaEscolha';
import CadastroScreen from './src/screens/CadastroScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Alert, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Index' component={IndexScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name='Idioma'
          component={IdiomaEscolha}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#8A2BE2'
            },
            headerTintColor: 'white',
          }} />
        <Stack.Screen
          name='Cadastro'
          component={CadastroScreen}
          options={{
            title: 'Voltar',
            headerStyle: {
              backgroundColor: '#8A2BE2'
            },
            headerTintColor: 'white',
          }} />
          <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            title: 'Voltar',
            headerStyle: {
              backgroundColor: '#8A2BE2'
            },
            headerTintColor: 'white',
          }} />
          <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#8A2BE2'
            },
            headerTintColor: 'white',
            headerBackVisible: false,
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

