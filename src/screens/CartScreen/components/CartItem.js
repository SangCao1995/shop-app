import React from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import Icon from '../../../images/icons';

export const CartItem = ({data, onRemove}) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{data.quantity}</Text>
        <View style={{width: 170}}>
          <Text style={styles.mainText} numberOfLines={1}>
            {data.productTitle}
          </Text>
        </View>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${data.sum.toFixed(2)}</Text>
        {onRemove && (
          <Icon.Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            color={'red'}
            size={24}
            onPress={onRemove}
            style={{marginLeft: 20}}
          />
        )}
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
    // width: 150,
  },
});
