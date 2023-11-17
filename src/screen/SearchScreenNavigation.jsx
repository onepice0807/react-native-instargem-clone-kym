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
import { POSTS } from '../data/Posts';

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

const SearchResults = ({ results, type }) => {
  // 여기서 type 변수는 현재 사용하지 않지만,
  // 추후 다양한 검색 결과 유형에 따라 필터링하는 로직에 사용할 수 있습니다.
  return (
    <ScrollView style={styles.resultsContainer}>
      {results.map((result, index) => (
        <View key={index}>
          <Text>{result.caption}</Text>
          {/* 결과의 나머지 부분을 렌더링합니다. */}
        </View>
      ))}
    </ScrollView>
  );
};

const TopTabBar = ({ onSearch, searchResults }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Top'>
        {() => <SearchResults results={searchResults} type='Top' />}
      </Tab.Screen>
      <Tab.Screen name='Accounts'>
        {() => <SearchResults results={searchResults} type='Accounts' />}
      </Tab.Screen>
      {/* 여기에 다른 탭들을 추가할 수 있습니다. */}
    </Tab.Navigator>
  );
};

const SearchScreenNavigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim === '') {
      setSearchResults([]);
    } else {
      const filteredPosts = POSTS.filter((post) =>
        post.caption.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredPosts);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <TopTabBar onSearch={handleSearch} searchResults={searchResults} />
    </SafeAreaView>
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

export default SearchScreenNavigation;
