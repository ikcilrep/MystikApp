import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { validateUsername, validatePassword, validateNickname } from '../Helpers/Validation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

const Register = () => {
    const [nickname, setNickname] = useState('');
    const [nicknameValidation, setNicknameValidation] = useState({ error: true, message: '' });

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

    const onChangeNickname = nickname => {
        setNickname(nickname);
        setNicknameValidation(validateNickname(nickname));
    };



    return (
        <View style={styles.container}>
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
            <Input
                placeholder='Nickname'
                leftIcon={{ type: 'font-awesome', name: 'eye', color: 'tomato' }}
                label='Nickname'
                labelStyle={{ color: 'tomato' }}
                onChangeText={onChangeNickname}
                value={nickname}
                errorMessage={nicknameValidation.message}

            />
            <Input
                placeholder='Username'
                leftIcon={{ type: 'font-awesome', name: 'user', color: 'tomato' }}
                label='Username'
                labelStyle={{ color: 'tomato' }}
                onChangeText={onChangeUsername}
                value={username}
                errorMessage={usernameValidation.message}
            />
            <Input
                placeholder='Password'
                leftIcon={{ type: 'font-awesome', name: 'lock', color: 'tomato' }}
                secureTextEntry={true}
                label='Password'
                labelStyle={{ color: 'tomato' }}
                onChangeText={onChangePassword}
                value={password}
                errorMessage={passwordValidation.message}
            />
            {
                (nicknameValidation.error || usernameValidation.error || passwordValidation.error) ? <></> :
                    <Button
                        title="Sign in"
                        buttonStyle={{ backgroundColor: 'tomato' }}
                    />
            }
        </View>
    )
};

export default Register;