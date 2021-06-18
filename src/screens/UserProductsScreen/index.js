import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';
import {ProductItem, Header} from '../../components';

export const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Your Products'}
        onMenuClick={() => props.navigation.toggleDrawer()}
      />
      <FlatList
        data={userProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem
            data={item}
            onAddTocart={() => {}}
            onViewDetails={() => {}}
          />
        )}
      />
    </View>
  );
};
