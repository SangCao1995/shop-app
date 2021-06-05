import React from 'react';
import {View, FlatList} from 'react-native';
import {Header, OrderItem} from '../../components';
import {useSelector} from 'react-redux';

export const OrderScreen = props => {
  const orders = useSelector(state => state.order.order);
  return (
    <View style={{flex: 1}}>
      <Header
        title={'Your Orders'}
        onMenuClick={() => props.navigation.toggleDrawer()}
      />
      <FlatList
        keyExtractor={item => item.id}
        data={orders}
        renderItem={({item}) => <OrderItem data={item} />}
      />
    </View>
  );
};
