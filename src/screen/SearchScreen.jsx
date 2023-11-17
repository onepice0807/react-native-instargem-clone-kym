import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SearchScreenNavigation from './SearchScreenNavigation';
import { SafeAreaView, StyleSheet } from 'react-native';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer independent={true}>
        <SearchScreenNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 37 : 0,
  },
});

export default SearchScreen;
