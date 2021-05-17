import {cartTypes} from './actionTypes';

export const cartActions = {
  addToCart,
  removeFromCart,
};

function addToCart(data) {
  return {
    type: cartTypes.ADD_TO_CART,
    data,
  };
}

function removeFromCart(data) {
  return {
    type: cartTypes.REMOVE_FROM_CART,
    data,
  };
}
