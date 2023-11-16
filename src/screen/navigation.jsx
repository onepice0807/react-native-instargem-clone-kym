import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewPostScreen from './NewPostScreen';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
      <Stack.Screen name='SearchScreen' component={SearchScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
