import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Header, ProductItem} from '../../components';
import {useSelector} from 'react-redux';
import {SCREEN} from '../../routes/Screen';

export const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  return (
    <View style={{flex: 1}}>
      <Header title={'All products'} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            data={item}
            onViewDetails={() =>
              props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item})
            }
          />
        )}
      />
    </View>
  );
};
