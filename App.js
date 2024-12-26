import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {PRIMARY_APP_COLOR} from './src/utils/colorConstants';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={PRIMARY_APP_COLOR}
        />
        <AppNavigator />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
