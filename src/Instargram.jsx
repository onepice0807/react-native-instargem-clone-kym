import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screen/HomeScreen';
import NewPostScreen from './screen/NewPostScreen';

export default function Instargram() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <NewPostScreen />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
