import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from './Screen';
import {
  ProductDetailScreen,
  ProductOverviewScreen,
  CartScreen,
} from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SCREEN.PRODUCT_OVERVIEW}
        component={ProductOverviewScreen}
      />
      <Stack.Screen
        name={SCREEN.PRODUCT_DETAIL}
        component={ProductDetailScreen}
      />
      <Stack.Screen name={SCREEN.CART} component={CartScreen} />
    </Stack.Navigator>
  );
};
