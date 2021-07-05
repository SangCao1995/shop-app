import React, {useState, useCallback} from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';
import {Header} from '../../components';
import {Colors} from '../../themes';

export const EditProductScreen = props => {
  const product = props.route.params.product;
  const [title, setTitle] = useState(product ? product.title : '');
  const [imageUrl, setImageUrl] = useState(product ? product.imageUrl : '');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(
    product ? product.description : '',
  );
  const submitHandle = useCallback(() => {
    console.log('submit');
  }, []);

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
