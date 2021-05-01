import {cartTypes} from './actionTypes';

export const cartActions = {
  addToCart,
};

function addToCart(data) {
  return {
    type: cartTypes.ADD_TO_CART,
    data,
  };
}
