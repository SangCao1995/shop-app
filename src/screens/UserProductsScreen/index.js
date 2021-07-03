import React from 'react';
import {FlatList, View, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ProductItem, Header} from '../../components';
import {Colors} from '../../themes';
import {SCREEN} from '../../routes/Screen';
import {productActions} from '../../store/actions';

export const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

  const selectItemHandle = item => {
    props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item});
  };
  const dispatch = useDispatch();
  const editProductHandle = item => {
    props.navigation.navigate(SCREEN.EDIT_PRODUCT, {product: item});
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Your Products'}
        onMenuClick={() => props.navigation.toggleDrawer()}
        isHeaderRight
        onEditClick={() => props.navigation.navigate(SCREEN.EDIT_PRODUCT)}
      />
      <FlatList
        data={userProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem data={item} onSelect={() => editProductHandle(item)}>
            <Button
              title={'Edit'}
              color={Colors.primary}
              onPress={() => editProductHandle(item)}
            />
            <Button
              title={'Delete'}
              color={Colors.primary}
              onPress={() => dispatch(productActions.deleteProduct(item))}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};
