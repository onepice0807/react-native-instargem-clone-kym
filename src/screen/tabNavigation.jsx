import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// 각 탭의 스크린 컴포넌트
const HomeScreen = () => (
  <View>
    <Text>Home</Text>
  </View>
);
const SearchScreen = () => (
  <View>
    <Text>Search</Text>
  </View>
);
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

// 탭 네비게이터 컴포넌트
const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Search' component={SearchScreen} />
        <Tab.Screen name='Reels' component={ReelsScreen} />
        <Tab.Screen name='Shop' component={ShopScreen} />
        <Tab.Screen name='Profile' component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
