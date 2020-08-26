import React from 'react';
import Login from './Login';
import Register from './Register';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthenticationTabNavigator = ({ setTokenExpirationDate }) => {

    const Tab = createBottomTabNavigator();

    const screenOptions = ({ route }) => ({
        tabBarIcon: (({ color, size }) => {
            switch (route.name) {
                case 'Login':
                    return <Icon name='check' size={size} color={color} />;
                case 'Register':
                    return <Icon name='plus' size={size} color={color} />;
                default:
                    break;
            }
        })
    });

    const ParametrizedLogin = () => <Login setTokenExpirationDate={setTokenExpirationDate} />;
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Login" component={ParametrizedLogin} />
                <Tab.Screen name="Register" component={Register} />

            </Tab.Navigator>

        </NavigationContainer>
    )
};

export default AuthenticationTabNavigator;