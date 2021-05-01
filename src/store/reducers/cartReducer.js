import {cartTypes} from '../actions/actionTypes';

const initialState = {
  items: {},
  totalAmount: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      const addedProduct = action.data;
      let item;
      if (state.items[addedProduct.id]) {
        // already have the item in the cart
        item = {
          quantity: state.items[addedProduct.id].quantity + 1,
          productPrice: addedProduct.price,
          productTitle: addedProduct.title,
          sum: addedProduct.price + state.items[addedProduct.id].sum,
        };
      } else {
        item = {
          quantity: 1,
          productPrice: addedProduct.price,
          productTitle: addedProduct.title,
          sum: addedProduct.price,
        };
      }
      return {
        ...state,
        items: {...state.items, [addedProduct.id]: item},
        totalAmount: state.totalAmount + addedProduct.price,
      };
  }
  return state;
};

export default cartReducer;
