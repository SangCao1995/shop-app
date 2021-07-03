import React from 'react';
import {View, FlatList, Button} from 'react-native';
import {Header, ProductItem} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {SCREEN} from '../../routes/Screen';
import {cartActions} from '../../store/actions';
import {Colors} from '../../themes';

export const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  const dispatch = useDispatch();
  const selectItemHandle = item => {
    props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item});
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={'All products'}
        isHeaderRight
        onCartClick={() => props.navigation.navigate(SCREEN.CART)}
        onMenuClick={() => props.navigation.toggleDrawer()}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={products}
        renderItem={({item}) => (
          <ProductItem data={item} onSelect={() => selectItemHandle(item)}>
            <Button
              title={'View Details'}
              color={Colors.primary}
              onPress={() => selectItemHandle(item)}
            />
            <Button
              title={'To Cart'}
              color={Colors.primary}
              onPress={() => dispatch(cartActions.addToCart(item))}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};
