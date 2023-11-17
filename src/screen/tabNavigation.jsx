import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import SignedInStack from './navigation';
import SearchScreen from './SearchScreen';

// 각 탭의 스크린 컴포넌트

const ReelsScreen = () => (
  <View>
    <Text>Reels</Text>
  </View>
);
const ShopScreen = () => (
  <View>
    <Text>Shop</Text>
  </View>
);
const ProfileScreen = () => (
  <View>
    <Text>Profile</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
};
// 탭 네비게이터 컴포넌트
const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={SignedInStack} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Reels' component={ReelsScreen} />
        <Tab.Screen name='Shop' component={ShopScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
