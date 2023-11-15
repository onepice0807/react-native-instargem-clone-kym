import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormikPostUploader from './FormikPostUploader';

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      <FormikPostUploader />
    </View>
  );
};

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://img.icons8.com/metro/26/back.png',
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>

      <Text style={{ fontSize: 20 }}>New Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});

export default AddNewPost;
