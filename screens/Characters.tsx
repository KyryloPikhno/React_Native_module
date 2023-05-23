import {Button, FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {CharactersRouteProps, HomeRoutes} from '../routes/HomeRoute';
import {useNavigation, useRoute} from '@react-navigation/native';
import {charactersActions} from '../redux/character.slice';
import {useDispatch, useSelector} from 'react-redux';
import {ICharacter} from '../interfaces/interfaces';
import React, {useLayoutEffect} from 'react';

export const Characters = () => {
  const navigation = useNavigation<any>();
  const {params} = useRoute<CharactersRouteProps<HomeRoutes.Characters>>();
  console.log(params.charactersId);

  const {characters}: any = useSelector<any>(state => state.charactersReducer);
  console.log(characters);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch<any>(charactersActions.getAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = ({item}: {item: ICharacter}) => {
    return (
      <View style={styles.listItem} key={item.id}>
        <Text style={styles.listItemText}>id: {item.id}</Text>
        <Text style={styles.listItemText}>Name: {item.name}</Text>
        <Text style={styles.listItemText}>Gender: {item.gender}</Text>
        <Image style={styles.img} source={{uri: item.image}} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Characters screen</Text>
      {!!characters.length && (
        <FlatList data={characters} renderItem={renderItem} />
      )}
      <Button title={'Go back'} onPress={() => navigation.goBack()} />
      <Button
        title={'Go to tabs'}
        onPress={() => navigation.navigate(HomeRoutes.MainTab)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listItem: {
    padding: 8,
    marginBottom: 8,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  listItemText: {
    fontSize: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  tabsButton: {
    marginBottom: 16,
  },
  img: {
    margin: 16,
    height: 80,
    width: 80,
  },
});
