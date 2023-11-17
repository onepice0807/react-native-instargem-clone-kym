import React from 'react';
import { SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Margin from '../components/Margin';
import { POSTS } from '../data/Posts';
import Post from '../components/home/Post';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header navigation={navigation} />
        <Margin height={10} />
        <Stories />
        <Margin height={10} />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} key={`post-${index}`} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 37 : 0,
  },
});

export default HomeScreen;
