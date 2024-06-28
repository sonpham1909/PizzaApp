import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const AuthenticationScreen = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Reset Password', 'A password reset link has been sent to your email.');
    } catch (error) {
      Alert.alert('Reset Password', 'An error occurred while sending the password reset email.');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <Button
        title="Reset Password"
        onPress={handleResetPassword}
      />
    </View>
  );
};

export default AuthenticationScreen;