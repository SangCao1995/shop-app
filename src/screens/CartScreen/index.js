import React from 'react';
import {View, Text, Button, StyleSheet, FlatList} from 'react-native';
import {Header} from '../../components';
import {useSelector, useDispatch} from 'react-redux';
import {Colors} from '../../themes';
import {CartItem} from './components';
import {cartActions, orderActions} from '../../store/actions';

export const CartScreen = props => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems;
  });
  const dispatch = useDispatch();

  const onRemoveHandle = item => {
    dispatch(cartActions.removeFromCart(item));
  };

  const onAddOrderHandle = () => {
    const data = {
      items: cartItems,
      totalAmount,
    };
    dispatch(orderActions.addOrder(data));
  };

  return (
    <View style={{flex: 1}}>
      <Header onBackClick={() => props.navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 18}}>
            Total:{' '}
            <Text style={{color: Colors.primary}}>
              ${totalAmount.toFixed(2)}
            </Text>
          </Text>
          <Button
            title={'Order Now'}
            disabled={totalAmount === 0}
            color={Colors.accent}
            onPress={onAddOrderHandle}
          />
        </View>
        <View>
          <FlatList
            keyExtractor={(item, index) => item.productId}
            data={cartItems}
            renderItem={({item}) => (
              <CartItem data={item} onRemove={() => onRemoveHandle(item)} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
