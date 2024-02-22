import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation } from '../types';
import styles from '../style';

interface RegisterScreenProps {
  navigation: Navigation;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    password: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));

      Alert.alert(
        'Success',
        'User registered successfully',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ],
        { cancelable: false },
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to register user');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(value) => handleInputChange('name', value)}
        value={user.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(value) => handleInputChange('username', value)}
        value={user.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(value) => handleInputChange('password', value)}
        value={user.password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Register" onPress={handleRegister} />
        <Button
          title="Alrady registered"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
