import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native-elements';
import Login from './Components/Login';
import Register from './Components/Register';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <Header
        placement='left'
        centerComponent={{ text: 'MYSTIK', style: { color: 'tomato' } }}
        containerStyle={{
          backgroundColor: 'white',
        }}
      />


      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({  color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Login':
                iconName = 'check';
                break;
              case 'Register':
                iconName = 'plus';
                break;
              default:
                break;

            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Register" component={Register} />

        </Tab.Navigator>

      </NavigationContainer>

      <StatusBar style="auto" />
    </>
  );
}