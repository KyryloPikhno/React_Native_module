/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './screens/Home';
import {Posts} from './screens/Posts';
import {HomeRoutes} from './routes/HomeRoute';
import {MainTab} from './screens/tabs/MainTab';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
