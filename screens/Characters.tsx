import {CharactersRouteProps, HomeRoutes} from '../routes/HomeRoute';
import {useNavigation, useRoute} from '@react-navigation/native';
import {charactersActions} from '../redux/character.slice';
import {useDispatch, useSelector} from 'react-redux';
import {Button, FlatList, Image, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {ICharacter} from '../interfaces/interfaces';

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

  const state: any = useSelector<any>(state => state.charactersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(charactersActions.getAll());
  }, []);

  const renderItem = ({item}: {item: ICharacter}) => {
    return (
      <View key={item.id}>
        <Text>id: {item.id}</Text>
        <Text>Name: {item.name}</Text>
        <Image source={{uri: item.image}} />
      </View>
    );
  };

  return (
    <View>
      <Text>Characters screen</Text>
      <View>
        {!!state.characters.length && (
          <FlatList data={state.characters} renderItem={renderItem} />
        )}
      </View>
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      <Button
        title={'Go to tabs'}
        onPress={() => navigation.navigate(HomeRoutes.MainTab)}
      />
    </View>
  );
};
