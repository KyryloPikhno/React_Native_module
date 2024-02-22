import React, { useLayoutEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../style';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const [username, setUsername] = useState(null);

  useLayoutEffect(() => {
    const fetchUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          const { username: u } = JSON.parse(storedUser);
          setUsername(u);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {username ? `Hi ${username}, you're logged in.` : 'Loading...'}
      </Text>
    </View>
  );
};

export default HomeScreen;
