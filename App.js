import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { AsyncStorage, Text } from 'react-native';
import { Header } from 'react-native-elements';
import AuthenticationTabNavigator from './Components/AuthenticationTabNavigator';

export default function App() {
  const [tokenExpirationDate, setTokenExpirationDate] = useState(null);

  if (tokenExpirationDate == null) {
    AsyncStorage.getItem('tokenExpirationDate').then(tokenExpirationDateString => {
      if (tokenExpirationDateString)
        setTokenExpirationDate(Date.parse(tokenExpirationDateString));
    });

  }

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
        <AuthenticationTabNavigator setTokenExpirationDate={setTokenExpirationDate} />
        : <Text>You are logged in!</Text>}
      <StatusBar style="auto" />
    </>
  );
}