/**
 * ProfilePayment.tsx
 * 
 * Screen for managing profile payments.
 * 
 * @formatwd
 */

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type ProfilePaymentScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfilePayment'>;

/**
 * ProfilePayment component
 * 
 * @returns {JSX.Element} The profile payments screen component
 */
const ProfilePayment = () => {
  const navigation = useNavigation<ProfilePaymentScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Payment Methods</Text>
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.sectionTitle}>Current payment method</Text>
          <TouchableOpacity style={styles.paymentMethod}>
            <Image source={require('../../src/assets/mastercard.png')} style={styles.cardIcon} />
            <Text style={styles.paymentText}>MASTERCARD **72</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.sectionTitle}>Saved payment methods</Text>
          <TouchableOpacity style={styles.paymentMethod}>
            <Image source={require('../../src/assets/visa.png')} style={styles.cardIcon} />
            <Text style={styles.paymentText}>VISA **33</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.addMethod}  onPress={() => navigation.navigate('AddMethod')}>
            <Text style={styles.addMethodText}>Add another method</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Save method</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>Or pay with</Text>
          <View style={styles.payWithContainer}>
            <TouchableOpacity style={styles.payWithButton}>
              <Image source={require('../../src/assets/google.png')} style={styles.payWithIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.payWithButton}>
              <Image source={require('../../src/assets/apple.png')} style={styles.payWithIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

/**
 * Styles for the ProfilePayment component
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
    paymentContainer: {
      backgroundColor: 'white',
      padding: 16,
    },
    sectionTitle: {
      fontSize: 16,
      color: '#888',
      marginBottom: 10,
    },
    paymentMethod: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#f5f5f5',
    },
    cardIconContainer: {
      padding: 5,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    cardIcon: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
      marginRight: 10,
    },
    paymentText: {
      fontSize: 16,
      flex: 1,
    },
    addMethod: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#f5f5f5',
    },
    addMethodText: {
      fontSize: 16,
      color: '#1a73e8',
    },
    saveButton: {
      backgroundColor: '#1a73e8',
      alignItems: 'center',
      paddingVertical: 15,
      borderRadius: 5,
      marginTop: 20,
    },
    saveButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    orText: {
      textAlign: 'center',
      color: '#888',
      marginVertical: 20,
    },
    payWithContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    payWithButton: {
      marginHorizontal: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    payWithIcon: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },
  });
    
export default ProfilePayment;

// Coded by Rudra Patel
