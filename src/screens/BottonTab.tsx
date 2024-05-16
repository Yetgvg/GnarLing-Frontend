import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { Image, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottonTab = ({ route, navigation }: any) => {
    const { token } = route.params;

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: 'white', tabBarActiveBackgroundColor: '#8A2BE2' }}>
            <Tab.Screen name="Home" component={HomeScreen} initialParams={{ token }}
                options={{
                    tabBarIcon: () => (
                        <Image source={require('../assets/gnarLogin.png')} style={styles.icon} />
                    ),
                    title: ''
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    }
});

export default BottonTab