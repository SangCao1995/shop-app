import React from 'react';
import {LogBox} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProductOverviewScreen, OrderScreen} from '../screens';
import {SCREEN} from './Screen';
import {Colors} from '../themes';
import Icon from '../images/icons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  LogBox.ignoreLogs(['Reanimated 2']);
  return (
    <Drawer.Navigator drawerContentOptions={{activeTintColor: Colors.primary}}>
      <Drawer.Screen
        name={SCREEN.PRODUCT_OVERVIEW}
        component={ProductOverviewScreen}
        options={{
          title: 'Products',
          drawerIcon: ({focused, color, size}) => {
            let focusedIcon = focused ? Colors.primary : 'gray';
            return (
              <Icon.Ionicons name={'md-cart'} size={24} color={focusedIcon} />
            );
          },
        }}
      />
      <Drawer.Screen
        name={SCREEN.ORDER}
        component={OrderScreen}
        options={{
          title: 'Orders',
          drawerIcon: ({focused, color, size}) => {
            let focusedIcon = focused ? Colors.primary : 'gray';
            return (
              <Icon.Ionicons name={'md-list'} size={24} color={focusedIcon} />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};
