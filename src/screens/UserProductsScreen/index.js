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
          <ProductItem data={item} onSelect={() => selectItemHandle(item)}>
            <Button title={'Edit'} color={Colors.primary} onPress={() => {}} />
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
