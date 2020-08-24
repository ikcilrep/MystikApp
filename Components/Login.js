import React from 'react';
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

const Login = () => (
    <View style={styles.container}>
        <Input
            placeholder='Username'
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            label='Username'
        />
        <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
            secureTextEntry={true}
            label='Password'
        />
        <Button
            title="Log in"
        />
    </View>
);

export default Login;