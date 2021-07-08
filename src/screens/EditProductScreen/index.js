import React, {useCallback, useReducer} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import {Header, Input} from '../../components';
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

  const inputChangeHandle = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        input: inputIdentifier,
        isValid: inputValidity,
      });
    },
    [dispatchFormState],
  );

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
          <Input
            label={'Title'}
            id={'title'}
            initialValue={product ? product.title : ''}
            initialValidity={!!product}
            error={'Please enter a valid title!'}
            onInputChange={inputChangeHandle}
            keyboardType={'default'}
            autoCapitalize={'sentences'}
            autoCorrect
            returnKeyType={'next'}
            required
          />
          <Input
            label={'Image Url'}
            id={'imageUrl'}
            initialValue={product ? product.imageUrl : ''}
            initialValidity={!!product}
            error={'Please enter a valid image url!'}
            onInputChange={inputChangeHandle}
            keyboardType={'default'}
            returnKeyType={'next'}
            required
          />
          {product ? null : (
            <Input
              label={'Price'}
              id={'price'}
              initialValue={product ? product.price : ''}
              initialValidity={!!product}
              error={'Please enter a valid price!'}
              onInputChange={inputChangeHandle}
              keyboardType={'decimal-pad'}
              returnKeyType={'next'}
              required
              min={0.1}
            />
          )}
          <Input
            label={'Description'}
            id={'description'}
            initialValue={product ? product.description : ''}
            initialValidity={!!product}
            error={'Please enter a valid description!'}
            onInputChange={inputChangeHandle}
            keyboardType={'default'}
            autoCapitalize={'sentences'}
            autoCorrect
            required
            multiline
            numberOfLines={3}
            minLength={5}
          />
        </View>
      </ScrollView>
    </View>
  );
};
