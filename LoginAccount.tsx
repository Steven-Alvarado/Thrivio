/**
 * LoginScreen.tsx
 * 
 * Screen component for user login.
 * 
 * @format
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App'; 
import CustomButton from './buttons/CustomButton';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LoginAccount'>;

/**
 * LoginScreen component
 * 
 * @returns {JSX.Element} The login screen component
 */
const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  /**
   * Handle the login button press
   */
  const onLoginPressed = () => {
    console.warn('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <TextInput
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        placeholderTextColor="#8E8E93"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
        placeholderTextColor="#8E8E93"
      />
      <TouchableOpacity onPress={() => console.warn('Forgot password?')}>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton imageSource='' text="Log in" onPress={onLoginPressed} type="PRIMARY" />
      <Text style={styles.orLoginWith}>Or Login with</Text>
      <View style={styles.socialButtonsContainer}>
        <CustomButton text='' imageSource={require('./assets/facebook.png')} onPress={() => console.warn('Facebook login')} type="SOCIAL" />
        <CustomButton text='' imageSource={require('./assets/google.png')} onPress={() => console.warn('Google login')} type="SOCIAL" />
        <CustomButton text='' imageSource={require('./assets/apple.png')} onPress={() => console.warn('Apple login')} type="SOCIAL" />
      </View>
      <Text style={styles.footerText}>
        Don’t have an account? <Text onPress={() => navigation.navigate('CreateAccount')} style={styles.link}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 30,
    color: '#333',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#007AFF',
    marginVertical: 10,
    fontSize: 14,
    fontWeight: '500',
  },
  orLoginWith: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
    color: '#8E8E93',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#8E8E93',
  },
  link: {
    color: '#007AFF',
    fontWeight: '600',
  },
});

export default LoginScreen;

// Coded by Rudra Patel
