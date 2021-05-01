/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {store} from './src/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store} style={styles.container}>
      <SafeAreaView></SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
