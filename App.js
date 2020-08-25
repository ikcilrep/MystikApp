import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, Text } from 'react-native';
import { Header } from 'react-native-elements';
import Login from './Components/Login';
import Register from './Components/Register';
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();




export default function App() {
  const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

  if (tokenExpirationDate == null) {
    AsyncStorage.getItem('tokenExpirationDate').then(tokenExpirationDateString => {
      if (tokenExpirationDateString)
        setTokenExpirationDate(Date.parse(tokenExpirationDateString));
    });

  }


  const ParametrizedLogin = () => <Login setTokenExpirationDate={setTokenExpirationDate} />;

  return (
    <>
      <Header
        placement='left'
        centerComponent={{ text: 'MYSTIK', style: { color: 'tomato' } }}
        containerStyle={{
          backgroundColor: 'white',
        }}
      />

      {tokenExpirationDate == null || tokenExpirationDate < Date.now() ?
        (
          <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
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
              <Tab.Screen name="Login" component={ParametrizedLogin} />
              <Tab.Screen name="Register" component={Register} />

            </Tab.Navigator>

          </NavigationContainer>


        )
        : <Text>You are logged in!</Text>}
      <StatusBar style="auto" />
    </>
  );
}