import React, {useCallback, useReducer} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {Header} from '../../components';
import {Colors} from '../../themes';
import {useDispatch} from 'react-redux';
import {productActions} from '../../store/actions';

export const EditProductScreen = props => {
  const product = props.route.params.product;
  const dispatch = useDispatch();
  const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';
  const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
      const updatedValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };
      const updatedInputValidities = {
        ...state.inputValidities,
        [action.input]: action.isValid,
      };
      let updatedFormIsValid = true;
      for (const key in updatedInputValidities) {
        updatedFormIsValid = updatedFormIsValid && updatedInputValidities[key];
      }
      return {
        ...state,
        inputValues: updatedValues,
        inputValidities: updatedInputValidities,
        formIsValid: updatedFormIsValid,
      };
    }
    return state;
  };
  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      title: product ? product.title : '',
      imageUrl: product ? product.imageUrl : '',
      price: '',
      description: product ? product.description : '',
    },
    inputValidities: {
      title: product ? true : false,
      imageUrl: product ? true : false,
      price: product ? true : false,
      description: product ? true : false,
    },
    formIsValid: product ? true : false,
  });

  const submitHandle = useCallback(() => {
    if (!formState.formIsValid) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        {
          text: 'OK',
        },
      ]);
      return;
    }
    if (product) {
      const data = {
        id: product.id,
        title: formState.inputValues.title,
        imageUrl: formState.inputValues.imageUrl,
        description: formState.inputValues.description,
      };
      dispatch(productActions.editProduct(data));
    } else {
      const data = {
        title: formState.inputValues.title,
        imageUrl: formState.inputValues.imageUrl,
        price: Number(formState.inputValues.price),
        description: formState.inputValues.description,
      };
      dispatch(productActions.createProduct(data));
    }
    props.navigation.goBack();
  }, [dispatch, formState, product.id]);

  const titleChangeHandle = (inputIdentifier, text) => {
    let isValid = false;
    if (text.trim().length > 0) {
      isValid = true;
    }
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      value: text,
      input: inputIdentifier,
      isValid: isValid,
    });
  };

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
              value={formState.inputValues.title}
              onChangeText={titleChangeHandle.bind(this, 'title')}
              keyboardType={'default'}
              autoCapitalize={'sentences'}
              autoCorrect
            />
            {!formState.inputValidities.title && (
              <Text>Please enter a valid title!</Text>
            )}
          </View>
          <View style={styles.formControl}>
            <Text style={styles.label}>Image URL</Text>
            <TextInput
              style={styles.textInput}
              value={formState.inputValues.imageUrl}
              onChangeText={titleChangeHandle.bind(this, 'imageUrl')}
            />
            {!formState.inputValidities.imageUrl && (
              <Text>Please enter a valid title!</Text>
            )}
          </View>
          {product ? null : (
            <View style={styles.formControl}>
              <Text style={styles.label}>Price</Text>
              <TextInput
                style={styles.textInput}
                value={formState.inputValues.price}
                onChangeText={titleChangeHandle.bind(this, 'price')}
                keyboardType={'decimal-pad'}
              />
              {!formState.inputValidities.price && (
                <Text>Please enter a valid title!</Text>
              )}
            </View>
          )}
          <View style={styles.formControl}>
            <Text style={styles.label}>Description</Text>
            <TextInput
              style={styles.textInput}
              value={formState.inputValues.description}
              onChangeText={titleChangeHandle.bind(this, 'description')}
            />
            {!formState.inputValidities.description && (
              <Text>Please enter a valid title!</Text>
            )}
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
