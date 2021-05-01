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
import {Navigator} from './src/routes';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Navigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
