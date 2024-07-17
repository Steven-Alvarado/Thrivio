import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const CustomButton = ({ onPress, text, type = 'PRIMARY', imageSource }) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.container, styles[`container_${type}`]]}
    >
      {imageSource ? (
        <Image source={imageSource} style={styles.image} />
      ) : (
        <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_PRIMARY: {
    backgroundColor: '#289DFF',
  },
  container_TERTIARY: {},
  text: {
    fontSize: 16,
    color: 'black',
  },
  text_TERTIARY: {
    color: 'gray',
  },
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default CustomButton;
