// Profile.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

// Define type for ProfileScreen navigation
type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

// Define props for MenuItem component
interface MenuItemProps {
  icon: string;
  text: string;
  onPress: () => void;
}

// Define the ProfileScreen component
const ProfileScreen: React.FC = () => {
  // Access navigation prop
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  return (
    <View style={styles.container}>
      {/* Profile header */}
      <Text style={styles.profileHeader}>Profile</Text>

      {/* Profile image */}
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.profileImage}
      />

      {/* Profile name */}
      <Text style={styles.profileName}>James Freeman</Text>

      {/* Edit profile button */}
      <TouchableOpacity>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Menu items */}
      <View style={styles.menu}>
        <MenuItem icon="file" text="Personal Information" onPress={() => {}} />
        <MenuItem icon="history" text="Medical History" onPress={() => {}} />
        <MenuItem icon="heartbeat" text="Health Preferences" onPress={() => {}} />
        <MenuItem icon="credit-card" text="Payment Methods" onPress={() => {}} />
        <MenuItem icon="cogs" text="Settings" onPress={() => navigation.navigate('ProfileSettings')} />
      </View>

      {/* Footer with icons */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="user" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="cogs" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Define the MenuItem component
const MenuItem: React.FC<MenuItemProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Icon name={icon} size={20} color="#000" />
      <Text style={styles.menuItemText}>{text}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={20} color="#000" />
    </TouchableOpacity>
  );
};

// Define styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  profileHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 20,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  editProfile: {
    fontSize: 16,
    color: 'blue',
    marginVertical: 10,
  },
  menu: {
    marginTop: 20,
    width: '90%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#000',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1a73e8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '90%',
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    left: '5%',
    right: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  icon: {
    paddingHorizontal: 15,
  },
});

export default ProfileScreen;

//Coded by Rudra Patel