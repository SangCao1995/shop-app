import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '../../components';

export const OrderScreen = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Your Orders'}
        onMenuClick={() => props.navigation.toggleDrawer()}
      />
    </View>
  );
};
