import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FormikPostUploader from './FormikPostUploader';

const AddNewPost = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikPostUploader />
    </View>
  );
};

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
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
