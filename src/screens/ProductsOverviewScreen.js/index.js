import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Header, ProductItem} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN} from '../../routes/Screen';
import {cartActions} from '../../store/actions';

export const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <Header title={'All products'} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={products}
        renderItem={({item}) => (
          <ProductItem
            data={item}
            onAddTocart={() => dispatch(cartActions.addToCart(item))}
            onViewDetails={() =>
              props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item})
            }
          />
        )}
      />
    </View>
  );
};
