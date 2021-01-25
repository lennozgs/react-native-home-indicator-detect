import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import HomeIndicatorDetect from 'react-native-home-indicator-detect';


export default function App() {

  return (
    <View style={styles.container}>
      <Text>Home indicator: {HomeIndicatorDetect.DETECT}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
