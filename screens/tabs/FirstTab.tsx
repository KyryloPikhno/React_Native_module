import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabRoutes} from './MainTab';

export const FirstTab = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>First Tab</Text>
      <Button
        title={'GO TO SECOND TAB'}
        onPress={() => navigation.navigate(TabRoutes.SecondTab)}
      />
    </View>
  );
};
