import React from 'react';
import {FlatList, View, Button, Alert} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {ProductItem, Header} from '../../components';
import {Colors} from '../../themes';
import {SCREEN} from '../../routes/Screen';
import {productActions} from '../../store/actions';

export const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

  const dispatch = useDispatch();
  const editProductHandle = item => {
    props.navigation.navigate(SCREEN.EDIT_PRODUCT, {product: item});
  };
  const deleteHandle = product => {
    Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => dispatch(productActions.deleteProduct(product)),
      },
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <Header
        title={'Your Products'}
        onMenuClick={() => props.navigation.toggleDrawer()}
        isHeaderRight
        onEditClick={() =>
          props.navigation.navigate(SCREEN.EDIT_PRODUCT, {product: ''})
        }
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
              onPress={() => deleteHandle(item)}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};
