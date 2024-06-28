import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import firebase from '../firebase'; // Đường dẫn tới tệp firebase.js

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Đăng nhập thành công
    } catch (error) {
      Alert.alert('Login', 'An error occurred while logging in.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
};

export default LoginScreen;