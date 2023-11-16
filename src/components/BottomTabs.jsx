import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Divider, Image } from 'react-native-elements';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://img.icons8.com/ios-filled/50/home.png',
    inactive: 'https://img.icons8.com/ios/50/home--v1.png',
  },
  {
    name: 'Search',
    active: 'https://img.icons8.com/ios-filled/50/search--v1.png',
    inactive: 'https://img.icons8.com/ios/50/search--v1.png',
  },
  {
    name: 'Reels',
    active: 'https://img.icons8.com/ios-filled/50/instagram-reel.png',
    inactive: 'https://img.icons8.com/ios/50/instagram-reel.png',
  },
  {
    name: 'Shop',
    active: 'https://img.icons8.com/ios-filled/50/shop.png',
    inactive: 'https://img.icons8.com/ios/50/shop--v1.png',
  },
  {
    name: 'Profile',
    active:
      'https://yt3.ggpht.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s48-c-k-c0x00ffffff-no-rj',
    inactive:
      'https://yt3.ggpht.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s48-c-k-c0x00ffffff-no-rj',
  },
];

const BottomTabs = () => {
  const [activeTeb, setActiveTeb] = useState('Home');

  const Icon = ({ icon }) => {
    return (
      <TouchableOpacity
        onPress={() => setActiveTeb(icon.name)}
        style={{ justifyContent: 'center', alignSelf: 'center' }}
      >
        <Image
          source={{
            uri: activeTeb === icon.name ? icon.active : icon.inactive,
          }}
          style={[
            styles.icon,
            icon.name === 'Profile' ? styles.profile() : null,
            activeTeb === 'Profile' && icon.name === activeTeb
              ? styles.profile(activeTeb)
              : null,
          ]}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 999,
        backgroundColor: '#fff',
      }}
    >
      <Divider orientation='horizontal' width={1} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 50,
        }}
      >
        {bottomTabIcons.map((icon, index) => (
          <Icon key={`icon-${index}`} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  profile: (activeTeb = '') => ({
    borderRadius: 50,
    borderWidth: activeTeb === 'Profile' ? 3 : 0,
    borderColor: 'purple',
  }),
});

export default BottomTabs;
