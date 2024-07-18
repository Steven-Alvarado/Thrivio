/**
 * App.tsx
 * 
 * Main entry point of the application.
 * 
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootPage from '../../src/screens/BootPage'
import MainPage from '../../src/screens/MainPage';
import CreateAccount from '../../src/screens/CreateAccount';
import LoginAccount from '../../src/screens/LoginAccount'; 
import Profile from '../../src/screens/Profile';
import ProfileSettings from '../../src/screens/ProfileSettings';
import ProfilePayment from '../../src/screens/ProfilePayment';
import AddMethod from './AddMethod';
import UserDashboard from './UserDashboard';

/**
 * Define the type for the stack parameters
 */
export type RootStackParamList = {
  BootPage: undefined;
  MainPage: undefined;
  CreateAccount: undefined;
  LoginAccount: undefined;
  Profile: undefined;
  ProfileSettings: undefined;
  ProfilePayment: undefined;
  AddMethod: undefined;
  UserDashboard: undefined;
};

/**
 * Create a stack navigator
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * App component
 * 
 * @returns {JSX.Element} The main application component
 */
const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BootPage">
        <Stack.Screen name="BootPage" component={BootPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="LoginAccount" component={LoginAccount} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="ProfilePayment" component={ProfilePayment} />
        <Stack.Screen name="AddMethod" component={AddMethod} />
        <Stack.Screen name="UserDashboard" component={UserDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// Coded by Rudra Patel
