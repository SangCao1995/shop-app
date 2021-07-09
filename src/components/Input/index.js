import React, {useReducer, useEffect} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../themes';

export const Input = props => {
  const {
    label,
    initialValue,
    error,
    initialValidity,
    id,
    onInputChange,
  } = props;
  const INPUT_CHANGE = 'INPUT_CHANGE';
  const INPUT_BLUR = 'INPUT_BLUR';
  const inputReducer = (state, action) => {
    switch (action.type) {
      case INPUT_CHANGE:
        return {
          ...state,
          value: action.value,
          isValid: action.isValid,
        };
      case INPUT_BLUR:
        return {...state, touched: true};
    }
    return state;
  };
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: initialValue ? initialValue : '',
    isValid: initialValidity,
    touched: false,
  });

  useEffect(() => {
    if (inputState.touched) {
      onInputChange(id, inputState.value, inputState.isValid);
    }
  }, [inputState, onInputChange, id]);

  const changeTextHandle = text => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }
    if (props.email && !emailRegex.test(text.toLowerCase())) {
      isValid = false;
    }
    if (props.min != null && +text < props.min) {
      isValid = false;
    }
    if (props.max != null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength != null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({type: INPUT_CHANGE, value: text, isValid: isValid});
  };

  const loseFocusHandle = () => {
    dispatch({type: INPUT_BLUR});
  };

  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...props}
        style={styles.textInput}
        value={inputState.value}
        onChangeText={changeTextHandle}
        onBlur={loseFocusHandle}
      />
      {!inputState.isValid && inputState.touched && (
        <View style={{marginVertical: 5}}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
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
  errorText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    color: Colors.red,
  },
});
