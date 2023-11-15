import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text } from 'react-native';
import AddNewPost from '../components/newpostscreen/AddNewPost';

const NewPostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AddNewPost />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
});

export default NewPostScreen;
