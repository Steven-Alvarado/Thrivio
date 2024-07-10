import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import CustomInput from './inputs/LoginInputs';
import CustomButton from './buttons/CustomButton';
import { RootStackParamList } from './App'; // Import the RootStackParamList

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'BootPage'>;

const HomeScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onSignInPressed = () => {
    navigation.navigate('LoginAccount');
  };

  const onCreateAccountPressed = () => {
    navigation.navigate('CreateAccount');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/Thrivio.jpeg')} 
        style={[styles.logo, { height: height * 0.5 }]} 
        resizeMode="contain"
      />
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Thrivio Health</Text>
        <Text style={styles.subtitle}>Where your chronic health transformation begins!</Text>
        <CustomButton imageSource='' text="Log In" onPress={onSignInPressed} type="PRIMARY" />
        <CustomButton imageSource='' text="Create account" onPress={onCreateAccountPressed} type="SECONDARY" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
