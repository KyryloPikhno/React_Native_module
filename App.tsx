import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Characters} from './screens/Characters';
import {MainTab} from './screens/tabs/MainTab';
import {HomeRoutes} from './routes/HomeRoute';
import {StatusBar} from 'react-native';
import {Posts} from './screens/Posts';
import {Provider} from 'react-redux';
import {Home} from './screens/Home';
import {store} from './redux/store';
import React from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Stack.Navigator
          initialRouteName={HomeRoutes.Home}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            statusBarColor: '#fff',
          }}>
          <Stack.Screen
            name={HomeRoutes.Home}
            component={Home}
            options={{title: 'Home Screen'}}
          />
          <Stack.Screen
            name={HomeRoutes.Posts}
            component={Posts}
            options={{title: 'Posts'}}
          />
          <Stack.Screen
            name={HomeRoutes.MainTab}
            component={MainTab}
            options={{title: 'Tabs'}}
          />
          <Stack.Screen
            name={HomeRoutes.Characters}
            component={Characters}
            options={{title: 'Characters'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
