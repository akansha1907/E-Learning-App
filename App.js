import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {PRIMARY_APP_COLOR} from './src/utils/colorConstants';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={PRIMARY_APP_COLOR}
      />
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
