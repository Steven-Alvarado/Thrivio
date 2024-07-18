/**
 * AddMethod.tsx
 * 
 * Screen for managing Adding Payment Methods.
 * 
 * @format
 */

import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type AddMethodScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AddMethod'>;

/**
 * AddMethod component
 * 
 * @returns {JSX.Element} The adding payment method screen component
 */
const AddMethod = () => {
  const navigation = useNavigation<AddMethodScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Method</Text>
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Add a new payment method</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Name on Card" 
            placeholderTextColor="#C7C7CD" 
            defaultValue="JAMES FREEMAN" 
          />
          <TextInput 
            style={styles.input} 
            placeholder="Credit Card Number" 
            placeholderTextColor="#C7C7CD" 
            secureTextEntry 
            defaultValue="**** **** **** **54" 
          />
          <View style={styles.row}>
            <TextInput 
              style={[styles.input, styles.halfInput]} 
              placeholder="Expiry Date" 
              placeholderTextColor="#C7C7CD" 
              defaultValue="07/24" 
            />
            <TextInput 
              style={[styles.input, styles.halfInput]} 
              placeholder="CVV" 
              placeholderTextColor="#C7C7CD" 
              secureTextEntry 
              defaultValue="***" 
            />
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add payment method</Text>
            <Icon name="chevron-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

/**
 * Styles for the AddMethod component
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a73e8',
    padding: 16,
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    elevation: 2,
  },
  formTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#C7C7CD',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginHorizontal: 5,
  },
  addButton: {
    backgroundColor: '#1a73e8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddMethod;
