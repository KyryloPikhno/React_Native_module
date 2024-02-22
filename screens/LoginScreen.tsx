import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../types';
import styles from '../style';

interface User {
  username: string;
  password: string;
}

const LoginScreen = () => {
  const [formState, setFormState] = useState<User>({
    username: '',
    password: '',
  });

  const navigation = useNavigation<Navigation>();

  const handleLogin = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const { username: storedUsername, password: storedPassword } =
          JSON.parse(user);
        if (
          formState.username === storedUsername &&
          formState.password === storedPassword
        ) {
          navigation.navigate('Home');
        } else {
          Alert.alert('Error', 'Invalid username or password');
        }
      } else {
        Alert.alert('Error', 'User not found');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to login');
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(value) => handleInputChange('username', value)}
        value={formState.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(value) => handleInputChange('password', value)}
        value={formState.password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
        <Button
          title="New user"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
