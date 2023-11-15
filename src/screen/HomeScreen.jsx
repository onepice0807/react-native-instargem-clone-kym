import React from 'react';
import { SafeAreaView, StyleSheet, Platform, ScrollView } from 'react-native';
import Header from '../components/home/Header';
import Stories from '../components/home/Stories';
import Margin from '../components/Margin';
import { POSTS } from '../data/Posts';
import Post from '../components/home/Post';
import BottomTabs from '../components/BottomTabs';

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header />
        <Margin hight={10} />
        <Stories />
        <Margin hight={10} />
        <ScrollView>
          {POSTS.map((post, index) => (
            <Post post={post} key={`post-${index}`} />
          ))}
        </ScrollView>
        <BottomTabs />
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