import React from 'react';
import { View, TextInput, Button, Alert, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Navigation, User } from '../types';
import styles from '../style';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface RegisterScreenProps {
  navigation: Navigation;
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const initialValues = {
    name: '',
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(2, 'Name must be at least  2 characters')
      .max(30, 'Name must be at most  30 characters')
      .matches(/^[a-zA-Z0-9]*$/, 'Username can only contain letters'),
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

  const handleRegister = async (values: User) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(values));

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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
        isInitialValid={false}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && touched.name && (
              <Text style={styles.errorTextName}>{errors.name}</Text>
            )}
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
              <Button title="Register" onPress={handleSubmit} />
              <Button
                title="Already registered"
                onPress={() => navigation.navigate('Login')}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default RegisterScreen;
