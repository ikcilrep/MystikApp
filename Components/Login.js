import React, { useState } from 'react';
import { StyleSheet, View, AsyncStorage, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { server_address } from '../settings.json';

const axios = require('axios');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

function handleLogin({ username, password, setErrorMessage, setTokenExpirationDate }) {
    axios.post(`${server_address}/users/authenticate`, {
        username, password
    }, { headers: { 'content-type': 'application/json' } }).then(response => {
        AsyncStorage.setItem('token', response.data.token);
        AsyncStorage.setItem('tokenExpirationDate', response.data.expirationDate);
        AsyncStorage.setItem('userId', response.data.id);
        setTokenExpirationDate(Date.parse(response.data.expirationDate));
        setErrorMessage('');
    }).catch(err => {
        const message = err.response.data.message;
        if (message) {
            setErrorMessage(message);
        } else {
            setErrorMessage('There was an error, try again.');
        }
    });
}


const Login = ({ setTokenExpirationDate }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    return (
        <View style={styles.container}>
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
            <Input
                placeholder='Username'
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'tomato' }}
                label='Username'
                labelStyle={{ color: 'tomato' }}
                onChangeText={username => setUsername(username)}
                value={username}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'tomato' }}
                secureTextEntry={true}
                label='Password'
                labelStyle={{ color: 'tomato' }}
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <Button
                title="Log in"
                buttonStyle={{ backgroundColor: 'tomato' }}
                onPress={() => handleLogin({ username, password, setErrorMessage, setTokenExpirationDate })}
            />
        </View>
    )
};

export default Login;