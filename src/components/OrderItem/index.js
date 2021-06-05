import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Colors} from '../../themes';
import moment from 'moment';
import {CartItem} from '../../screens/CartScreen/components';

export const OrderItem = ({data}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={{fontFamily: 'OpenSans-Bold', fontSize: 16}}>
          ${data.totalAmount.toFixed(2)}
        </Text>
        <Text style={styles.dateText}>
          {moment(data.date).format('MMMM Do YYYY, hh:mm')}
        </Text>
      </View>
      <Button
        color={Colors.primary}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => setShowDetails(preState => !preState)}
      />
      {showDetails && (
        <View style={{width: '100%'}}>
          {data.items.map(cartItem => (
            <CartItem key={cartItem.productId} data={cartItem} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  dateText: {
    fontSize: 16,
    color: '#888',
    fontFamily: 'OpenSans-Regular',
  },
});
