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
            leftIcon={{ type: 'font-awesome', name: 'user', color:'tomato' }}
            label='Username'
            labelStyle={{color: 'tomato'}}
        />
        <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'lock', color:'tomato' }}
            secureTextEntry={true}
            label='Password'
            labelStyle={{color: 'tomato'}}
        />
        <Button
            title="Log in"
            buttonStyle={{backgroundColor:'tomato'}}
        />
    </View>
);

export default Login;