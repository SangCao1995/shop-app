import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../themes';
import Icon from '../../images/icons';

export const Header = ({
  title,
  onBackClick,
  onCartClick,
  isHeaderRight,
  onMenuClick,
  onEditClick,
}) => {
  return (
    <View style={styles.header}>
      {onBackClick && (
        <Icon.MaterialIcons
          name={'arrow-back-ios'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onBackClick}
        />
      )}
      {onMenuClick && (
        <Icon.Ionicons
          name={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onMenuClick}
        />
      )}
      <Text style={styles.title}>{title}</Text>
      {!isHeaderRight && <View style={{width: 24}} />}
      {onCartClick && (
        <Icon.Ionicons
          name={'md-cart'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onCartClick}
        />
      )}
      {onEditClick && (
        <Icon.MaterialIcons
          name={'create'}
          size={24}
          color={Platform.OS === 'android' ? 'white' : Colors.primary}
          onPress={onEditClick}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
    padding: 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 20,
  },
});
