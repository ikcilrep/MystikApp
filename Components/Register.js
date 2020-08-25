import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Register = () => (
    <View style={styles.container}>
        <Input
            placeholder='Nickname'
            leftIcon={{ type: 'font-awesome', name: 'eye', color:'tomato' }}
            label='Nickname'
            labelStyle={{color: 'tomato'}}
        />
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
            title="Sign in"
            buttonStyle={{backgroundColor:'tomato'}}
        />
    </View>
);

export default Register;