import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../../assets/header_logo.png')}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/ios/50/plus-2-math.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/ios/50/like--v1.png',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>13</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://img.icons8.com/ios/50/facebook-messenger--v1.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  unreadBadge: {
    width: 20,
    height: 20,
    position: 'absolute',
    backgroundColor: '#ff3250',
    left: 25,
    bottom: 20,
    borderRadius: 10,
  },
  unreadBadgeText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute',
  },
});

export default Header;
