import {cartTypes, orderTypes} from '../actions/actionTypes';

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
    case cartTypes.REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.data.productId];
      const currentQuantity = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQuantity > 1) {
        // need to reduce it, not to esase it
        const updatedCartItem = {
          quantity: selectedCartItem.quantity - 1,
          productPrice: selectedCartItem.productPrice,
          productTitle: selectedCartItem.productTitle,
          sum: selectedCartItem.sum - selectedCartItem.productPrice,
        };
        updatedCartItems = {
          ...state.items,
          [action.data.productId]: updatedCartItem,
        };
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.data.productId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };
    case orderTypes.ADD_ORDER:
      return initialState;
  }

  return state;
};

export default cartReducer;
