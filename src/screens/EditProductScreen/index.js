import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';

export const EditProductScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Header onBackClick={() => props.navigation.goBack()} />
      <Text>Edit Product Screen</Text>
    </View>
  );
};
