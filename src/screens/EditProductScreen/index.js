import React, {useState, useCallback} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import {Header} from '../../components';
import {Colors} from '../../themes';
import {useDispatch} from 'react-redux';
import {productActions} from '../../store/actions';

export const EditProductScreen = props => {
  const product = props.route.params.product;
  const [title, setTitle] = useState(product ? product.title : '');
  const [imageUrl, setImageUrl] = useState(product ? product.imageUrl : '');
  const [price, setPrice] = useState('');
  const dispatch = useDispatch();
  const [description, setDescription] = useState(
    product ? product.description : '',
  );
  const submitHandle = useCallback(() => {
    if (product) {
      const data = {
        id: product.id,
        title,
        imageUrl,
        description,
      };
      dispatch(productActions.editProduct(data));
    } else {
      const data = {
        title,
        imageUrl,
        price: Number(price),
        description,
      };
      dispatch(productActions.createProduct(data));
    }
    props.navigation.goBack();
  }, [dispatch, title, imageUrl, price, description, product.id]);

  return (
    <View style={{flex: 1}}>
      <Header
        onBackClick={() => props.navigation.goBack()}
        title={product ? 'Edit Product' : 'Add Product'}
        isHeaderRight
        onCheckmarkClick={submitHandle}
      />
      <ScrollView>
        <View style={{margin: 20}}>
          <View style={styles.formControl}>
            <Text style={styles.label}>Title</Text>
            <TextInput
              style={styles.textInput}
              value={title}
              onChangeText={text => setTitle(text)}
            />
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              style={styles.textInput}
              value={imageUrl}
              onChangeText={text => setImageUrl(text)}
            />
          </View>
          {product ? null : (
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                style={styles.textInput}
                value={price}
                onChangeText={text => setPrice(text)}
              />
            </View>
          )}
          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.textInput}
              value={description}
              onChangeText={text => setDescription(text)}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    marginVertical: 8,
  },
  textInput: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
  },
});
