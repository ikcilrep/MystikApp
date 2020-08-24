import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Header } from 'react-native-elements';
import Login from './Components/Login';

export default function App() {
  return (
    <>
      <Header
        placement='left'
        centerComponent={{ text: 'MYSTIK', style: { color: '#fff' } }}
      />
      <Login />

      <StatusBar style="auto" />
    </>
  );
}