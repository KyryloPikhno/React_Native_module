import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';

const baseUrl = 'https://jsonplaceholder.typicode.com';

interface IUser {
  id: string;
  name: string;
  phone: string;
  email: string;
}

const App = (): JSX.Element => {
  const [users, setUsers] = useState<IUser[]>([]);

  const fetchUsers = () => {
    fetch(`${baseUrl}/users`)
      .then(resp => resp.json())
      .then(json => setUsers(json));
  };

  const renderItem = ({item}: {item: IUser}) => {
    return (
      <View key={item.id}>
        <Text>id: {item.id}</Text>
        <Text>Name: {item.name}</Text>
        <Text>Phone: {item.phone}</Text>
        <Text>E-mail: {item.email}</Text>
        <Text>--------------------</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <Button title={'Get Users'} onPress={fetchUsers} />
      <View>
        <Text>Users</Text>
      </View>
      <View>
        {!!users.length && <FlatList data={users} renderItem={renderItem} />}
      </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({});

export default App;
