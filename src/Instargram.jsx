import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignedInStack from './screen/navigation';
import BottomTab from './screen/tabNavigation';

export default function Instargram() {
  return (
    <View style={styles.container}>
      <SignedInStack />
      {/* <BottomTab /> */}
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
