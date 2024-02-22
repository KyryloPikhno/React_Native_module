import React from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Navigation, User } from '../types';
import styles from '../style';
import { Formik } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .min(2, 'Username must be at least  2 characters')
    .max(30, 'Username must be at most  30 characters')
    .matches(/^[a-zA-Z0-9]*$/, 'Username can only contain letters'),
  password: Yup.string()
    .required('Password is required')
    .min(2, 'Password must be at least  2 characters')
    .max(30, 'Password must be at most  30 characters'),
});

const LoginScreen = () => {
  const navigation = useNavigation<Navigation>();

  const handleLogin = async (values: User) => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const { username: storedUsername, password: storedPassword } =
          JSON.parse(user);
        if (
          values.username === storedUsername &&
          values.password === storedPassword
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

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
        isInitialValid={false}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched = {},
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {errors.username && touched.username && (
              <Text style={styles.errorTextUsername}>{errors.username}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.errorTextPassword}>{errors.password}</Text>
            )}
            <View style={styles.buttonContainer}>
              <Button title="Login" onPress={handleSubmit} />
              <Button
                title="New user"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginScreen;
