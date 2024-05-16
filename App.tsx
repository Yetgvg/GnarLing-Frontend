import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import IndexScreen from './src/screens/IndexScreen';
import IdiomaEscolha from './src/screens/IdomaEscolha';
import CadastroScreen from './src/screens/CadastroScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import {Text, TouchableOpacity } from 'react-native';
import BottonTab from './src/screens/BottonTab';
import QuestionScreen from './src/screens/QuestionScreen';

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
          }}
        />
        <Stack.Screen
          name='Cadastro'
          component={CadastroScreen}
          options={{
            title: 'Voltar',
            headerStyle: {
              backgroundColor: '#8A2BE2'
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            title: 'Voltar',
            headerStyle: {
              backgroundColor: '#8A2BE2'
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='BottonTab'
          component={BottonTab}
          options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Index')}>
                <Text style={{ color: 'white', marginRight: 10 }}>Sair</Text>
              </TouchableOpacity>
            ),
            title: '',
            headerStyle: {
              backgroundColor: '#8A2BE2',
            },
            headerTintColor: 'white',
            headerBackVisible: false,
          })}
        />
        <Stack.Screen
          name='Question'
          component={QuestionScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#8A2BE2'
            },
            headerTintColor: 'white',
            headerBackVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

