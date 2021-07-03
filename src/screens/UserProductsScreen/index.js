import React from 'react';
import {FlatList, View, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {ProductItem, Header} from '../../components';
import {Colors} from '../../themes';
import {SCREEN} from '../../routes/Screen';

export const UserProductsScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);

  const selectItemHandle = item => {
    props.navigation.navigate(SCREEN.PRODUCT_DETAIL, {product: item});
  };

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
              onPress={() => {}}
            />
          </ProductItem>
        )}
      />
    </View>
  );
};
