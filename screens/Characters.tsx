import {CharactersRouteProps, HomeRoutes} from '../routes/HomeRoute';
import {useNavigation, useRoute} from '@react-navigation/native';
import {charactersActions} from '../redux/character.slice';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Text, View} from 'react-native';
import React, {useEffect} from 'react';

// type IGetAll = AsyncThunkAction<
//   any,
//   void,
//   {
//     state: any;
//   }
// > &
//   AnyAction;

export const Characters = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<CharactersRouteProps<HomeRoutes.Characters>>();
  console.log(params.charactersId);

  const characters = useSelector<any>(state => state.charactersReducer);
  console.log(characters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(charactersActions.getAll());
  }, [dispatch]);

  return (
    <View>
      <Text>Characters screen</Text>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      <Button
        title={'Go to tabs'}
        onPress={() => navigation.navigate(HomeRoutes.MainTab)}
      />
    </View>
  );
};
