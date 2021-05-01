import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from './Screen';
import {ProductOverviewScreen} from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={SCREEN.PRODUCT_OVERVIEW}
        component={ProductOverviewScreen}
      />
    </Stack.Navigator>
  );
};
