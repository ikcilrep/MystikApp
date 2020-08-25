import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
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
            />
        </View>
    )
};

export default Login;