import React from 'react';
import {View, Text, ScrollView, Image, Button, StyleSheet} from 'react-native';
import {Header} from '../../components';
import {Colors} from '../../themes';

export const ProductDetailScreen = props => {
  const product = props.route.params.product;

  return (
    <View style={{flex: 1}}>
      <Header
        title={product.title}
        onBackClick={() => props.navigation.goBack()}
      />
      <ScrollView>
        <Image
          source={{uri: product.imageUrl}}
          style={{width: '100%', height: 300}}
        />
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Button title={'Add to Cart'} color={Colors.primary} />
        </View>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  price: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
    color: '#888',
    fontFamily: 'OpenSans-Bold',
  },
  description: {
    fontSize: 14,
    marginHorizontal: 20,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
  },
});
