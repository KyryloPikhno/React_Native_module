import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HomeNavigationProps, HomeRoutes} from '../routes/HomeRoute';

export const Home = () => {
  const navigation = useNavigation<HomeNavigationProps>();
  return (
    <View
      style={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button
        title={'Go to Posts screen'}
        onPress={() => navigation.navigate(HomeRoutes.Posts, {postId: '1'})}
      />
    </View>
  );
};
