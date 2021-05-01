import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../themes';

export const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    padding: 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 20,
  },
});
