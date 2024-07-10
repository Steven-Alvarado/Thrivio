import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BootPage from './BootPage';
import MainPage from './MainPage';
import CreateAccount from './CreateAccount';
import LoginAccount from './LoginAccount'; 
import Profile from './Profile';

export type RootStackParamList = {
  BootPage: undefined;
  MainPage: undefined;
  CreateAccount: undefined;
  LoginAccount: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BootPage">
        <Stack.Screen name="BootPage" component={BootPage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
        <Stack.Screen name="LoginAccount" component={LoginAccount} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
