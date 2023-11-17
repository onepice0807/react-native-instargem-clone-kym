import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder='Search'
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={() => onSearch(query)}
      />
      <TouchableOpacity onPress={() => onSearch(query)}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const TopTabBar = ({ onSearch }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Top'>
        {() => <SearchResults onSearch={onSearch} type='Top' />}
      </Tab.Screen>
      <Tab.Screen name='Accounts'>
        {() => <SearchResults onSearch={onSearch} type='Accounts' />}
      </Tab.Screen>
      {/* Add other tabs here */}
    </Tab.Navigator>
  );
};

const SearchResults = ({ type }) => {
  // This is where you would fetch and return your search results based on the search type.
  // For simplicity, we're just returning a Text component.
  return (
    <ScrollView style={styles.resultsContainer}>
      <Text>{`Results for ${type}`}</Text>
    </ScrollView>
  );
};

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    // Here you could set the search query and perform the search
    setSearchQuery(query);
    // Perform search operation
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <TopTabBar onSearch={handleSearch} />
    </SafeAreaView>
  );
};

const TestApp = () => {
  return (
    <NavigationContainer>
      <SearchScreen />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  searchBar: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    padding: 10,
  },
  resultsContainer: {
    flex: 1,
  },
});

export default TestApp;
