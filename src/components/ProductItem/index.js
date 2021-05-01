import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {Colors} from '../../themes';

export const ProductItem = ({data, onAddTocart, onViewDetails}) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri: data.imageUrl}}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={{alignItems: 'center', height: '15%'}}>
        <Text style={{fontSize: 18, marginVertical: 4}}>{data.title}</Text>
        <Text style={{fontSize: 14, color: '#888'}}>
          ${data.price.toFixed(2)}
        </Text>
      </View>
      <View style={styles.actions}>
        <Button
          title={'View Details'}
          color={Colors.primary}
          onPress={onViewDetails}
        />
        <Button
          title={'To Cart'}
          color={Colors.primary}
          onPress={onAddTocart}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    margin: 20,
    height: 300,
    backgroundColor: 'white',
  },
  imageWrapper: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  actions: {
    height: '25%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
