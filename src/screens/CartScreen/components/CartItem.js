import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import Icon from '../../../images/icons';

export const CartItem = ({data, onRemove}) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{data.quantity}</Text>
        <Text style={styles.mainText}>{data.productTitle}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${data.sum.toFixed(2)}</Text>
        <Icon.Ionicons
          name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
          color={'red'}
          size={24}
          onPress={onRemove}
          style={{marginLeft: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    backgroundColor: 'white',
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'OpenSans-Regular',
    color: '#888',
    fontSize: 16,
  },
  mainText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
});
