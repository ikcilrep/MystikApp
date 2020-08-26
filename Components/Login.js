import React, { useState } from 'react';
import { StyleSheet, View, AsyncStorage, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { serverAddress } from '../settings.json';
import { validateUsername, validatePassword } from '../Helpers/Validation';

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
    axios.post(`${serverAddress}/users/authenticate`, {
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
    const [usernameValidation, setUsernameValidation] = useState({ error: true, message: '' });

    const [password, setPassword] = useState('');
    const [passwordValidation, setPasswordValidation] = useState({ error: true, message: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const onChangeUsername = username => {
        setUsername(username);
        setUsernameValidation(validateUsername(username));
    };

    const onChangePassword = password => {
        setPassword(password);
        setPasswordValidation(validatePassword(password));
    };


    return (
        <View style={styles.container}>
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
            <Input
                placeholder='Username'
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'tomato' }}
                label='Username'
                labelStyle={{ color: 'tomato' }}
                onChangeText={onChangeUsername}
                errorMessage={usernameValidation.message}
                value={username}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'tomato' }}
                secureTextEntry={true}
                label='Password'
                labelStyle={{ color: 'tomato' }}
                onChangeText={onChangePassword}
                errorMessage={passwordValidation.message}
                value={password}
            />
            {
                usernameValidation.error || passwordValidation.error ? <></> :
                    <Button
                        title="Log in"
                        buttonStyle={{ backgroundColor: 'tomato' }}
                        onPress={() => handleLogin({ username, password, setErrorMessage, setTokenExpirationDate })}
                    />
            }
        </View>
    )
};

export default Login;