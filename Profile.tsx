import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface MenuItemProps {
  icon: string;
  text: string;
}

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.profileHeader}>Profile</Text>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
        style={styles.profileImage}
      />
      <Text style={styles.profileName}>James Freeman</Text>
      <TouchableOpacity>
        <Text style={styles.editProfile}>Edit Profile</Text>
      </TouchableOpacity>
      <View style={styles.menu}>
        <MenuItem icon="file" text="Personal Information" />
        <MenuItem icon="history" text="Medical History" />
        <MenuItem icon="heartbeat" text="Health Preferences" />
        <MenuItem icon="credit-card" text="Payment Methods" />
        <MenuItem icon="cogs" text="Settings" />
      </View>
    </View>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, text }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Icon name={icon} size={20} color="#000" />
      <Text style={styles.menuItemText}>{text}</Text>
      <MaterialIcons name="keyboard-arrow-right" size={20} color="#000" />
    </TouchableOpacity>
  );
};

const App: React.FC = () => {
  return (
    <ProfileScreen />
  );
};

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
});

export default App;
