/**
 * ProfileSettings.tsx
 * 
 * Screen for managing profile settings.
 * 
 * @format
 */

import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type ProfileSettingsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfileSettings'>;

/**
 * ProfileSettings component
 * 
 * @returns {JSX.Element} The profile settings screen component
 */
const ProfileSettings = () => {
  const navigation = useNavigation<ProfileSettingsScreenNavigationProp>();
  const [isPushNotificationsEnabled, setPushNotificationsEnabled] = React.useState(false);
  const [isDarkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const togglePushNotifications = () => setPushNotificationsEnabled(previousState => !previousState);
  const toggleDarkMode = () => setDarkModeEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/50' }} // Replace with actual profile image URL
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>James Freeman</Text>
        </View>

        <View style={styles.settingsContainer}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Edit profile</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Change password</Text>
            <Icon name="chevron-forward" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <Text style={styles.settingText}>Add 2 Factor Auth</Text>
            <Icon name="add-circle-outline" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Push notifications</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#1a73e8' }}
              thumbColor={isPushNotificationsEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={togglePushNotifications}
              value={isPushNotificationsEnabled}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={styles.settingText}>Dark mode</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#1a73e8' }}
              thumbColor={isDarkModeEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleDarkMode}
              value={isDarkModeEnabled}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

/**
 * Styles for the ProfileSettings component
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
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#1a73e8',
    paddingVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  settingsContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  settingText: {
    fontSize: 16,
  },
});

export default ProfileSettings;

// Coded by Rudra Patel
