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
            leftIcon={{ type: 'font-awesome', name: 'eye' }}
            label='Nickname'
        />
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
            title="Sign in"
        />
    </View>
);

export default Register;