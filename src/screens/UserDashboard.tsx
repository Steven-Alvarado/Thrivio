// UserDashboard.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

// Define type for UserDashboard navigation
type UserDashboardNavigationProp = NativeStackNavigationProp<RootStackParamList, 'UserDashboard'>;

const UserDashboard = () => {
  // Access navigation prop
  const navigation = useNavigation<UserDashboardNavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome,</Text>
            <Text style={styles.usernameText}>James!</Text>
            <Text style={styles.subText}>How is it going today?</Text>
          </View>
          <Image source={require('../../src/assets/doctor_image.png')} style={styles.headerImage} />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctor, drugs, articles..."
            placeholderTextColor="#C7C7CD"
          />
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="medkit-outline" size={30} color="#002366" />
            <Text style={styles.iconText}>Top Doctors</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="alarm-outline" size={30} color="#002366" />
            <Text style={styles.iconText}>Reminder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="heart-outline" size={30} color="#002366" />
            <Text style={styles.iconText}>Health Plan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.newsContainer}>
          <View style={styles.newsHeader}>
            <Text style={styles.newsTitle}>Latest News</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.newsItem}>
            <Image source={require('../../src/assets/news_image1.png')} style={styles.newsImage} />
            <View style={styles.newsTextContainer}>
              <Text style={styles.newsHeadline}>The 25 Healthiest Fruits You Can Eat, According to a Nutritionist</Text>
              <Text style={styles.newsDate}>Jun 11, 2024</Text>
              <Text style={styles.newsReadTime}>5 min read</Text>
            </View>
          </View>
          <View style={styles.newsItem}>
            <Image source={require('../../src/assets/news_image2.png')} style={styles.newsImage} />
            <View style={styles.newsTextContainer}>
              <Text style={styles.newsHeadline}>The Impact of COVID-19 on Healthcare Systems</Text>
              <Text style={styles.newsDate}>Oct 5, 2020</Text>
              <Text style={styles.newsReadTime}>6 min read</Text>
            </View>
          </View>
          <View style={styles.newsItem}>
            <Image source={require('../../src/assets/news_image3.png')} style={styles.newsImage} />
            <View style={styles.newsTextContainer}>
              <Text style={styles.newsHeadline}>How a Diet Can Change Your Life</Text>
              <Text style={styles.newsDate}>Jul 6, 2024</Text>
              <Text style={styles.newsReadTime}>1 min read</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* Footer with icons */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Icon name="home" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="notifications" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="settings" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EAF6',
    padding: 16,
  },
  welcomeContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 24,
    color: '#1a73e8',
  },
  usernameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
  },
  subText: {
    fontSize: 16,
    color: '#6e6e6e',
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 12,
    paddingLeft: 20,
    borderColor: '#C7C7CD',
    borderWidth: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 12,
    color: '#002366',
    marginTop: 5,
  },
  newsContainer: {
    padding: 16,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#1a73e8',
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  newsImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  newsTextContainer: {
    flex: 1,
  },
  newsHeadline: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  newsDate: {
    fontSize: 12,
    color: '#6e6e6e',
  },
  newsReadTime: {
    fontSize: 12,
    color: '#6e6e6e',
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

export default UserDashboard;
