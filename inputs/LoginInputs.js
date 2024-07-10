import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput value = {value} onChangeText={setValue} placeholder={placeholder} secureTextEntry= {secureTextEntry} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '75%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 5,
    fontSize: 16,
    color: 'black',
  },
});

export default CustomInput;
