import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CheckBox } from 'react-native-elements'; // Import CheckBox from react-native-elements
import CustomButton from './buttons/CustomButton';
import { RootStackParamList } from './App'; // Import the RootStackParamList

type CreateAccountScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateAccount'>;

const CreateAccountScreen: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigation<CreateAccountScreenNavigationProp>();

  const onCreateAccountPressed = () => {
    console.warn('Create Account');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create account</Text>
      <TextInput 
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername} 
        style={styles.input} 
      />
      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input} 
        keyboardType="email-address"
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        style={styles.input} 
        secureTextEntry
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={isChecked} // Use 'checked' instead of 'value'
          onPress={() => setIsChecked(!isChecked)} // Use 'onPress' to toggle 'isChecked'
        />
        <Text style={styles.checkboxLabel}>I accept the terms and privacy policy</Text>
      </View>
      <CustomButton imageSource='' text="Create Account" onPress={onCreateAccountPressed} type="PRIMARY" />
      <Text style={styles.footerText}>
        Already have an account? <Text onPress={() => navigation.navigate('MainPage')} style={styles.link}>Log in</Text>
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
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 20,
    },
    checkboxLabel: {
      marginLeft: 10,
      fontSize: 16,
    },
    footerText: {
      marginTop: 20,
      textAlign: 'center',
      fontSize: 16,
      color: '#8E8E93',
    },
    link: {
      color: '#007AFF',
      fontWeight: '600',
    },
  });  

export default CreateAccountScreen;
