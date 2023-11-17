import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { USERS } from '../../data/Users';

const Stories = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((user, index) => {
          return (
            <View style={styles.card} key={`index-${index}`}>
              <Image source={{ uri: user.image }} style={styles.userProfile} />
              <Text style={styles.user}>
                {user.user.length > 6
                  ? user.user.slice(0, 5).toLowerCase() + '...'
                  : user.user.toLowerCase()}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 6,
    alignItems: 'center',
  },
  userProfile: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  user: {},
});

export default Stories;
