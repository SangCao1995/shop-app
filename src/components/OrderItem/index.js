import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {Colors} from '../../themes';
import moment from 'moment';
import {CartItem} from '../../screens/CartScreen/components';
import {Card} from '../Card';

export const OrderItem = ({data}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card style={styles.orderItem}>
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
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
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
