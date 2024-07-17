/**
 * HomeScreen.tsx
 * 
 * Screen component for the home page (boot page).
 * 
 * @format
 */

import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from './App';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BootPage'
>;

/**
 * HomeScreen component
 * 
 * @returns {JSX.Element} The home screen component
 */
const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainPage');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../src/assets/Thrivio.jpeg')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default HomeScreen;

// Coded by Rudra Patel
