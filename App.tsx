import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import LoginScreen from './src/screens/LoginScreen';
import IdiomaEscolha from './src/screens/IdomaEscolha';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name='Cadastro'
          component={IdiomaEscolha}
          options={{
            title: '',
            headerStyle: { 
              backgroundColor: '#8A2BE2' 
            },
            headerTintColor: 'white',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

