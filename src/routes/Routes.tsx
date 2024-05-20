import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useToken } from '../context/TokenContext';

//Screens
import IndexScreen from '../screens/IndexScreen';
import IdiomaEscolha from '../screens/IdomaEscolha';
import CadastroScreen from '../screens/CadastroScreen';
import LoginScreen from '../screens/LoginScreen';
import BottonTab from '../screens/BottonTab';
import QuestionScreen from '../screens/QuestionScreen';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const { token } = useToken();
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
                    options={() => ({
                        headerTitleAlign: 'center',
                        title: token?.nome,
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
                        title: 'Voltar',
                        headerStyle: {
                            backgroundColor: '#8A2BE2'
                        },
                        headerTintColor: 'white',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
