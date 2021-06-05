import {combineReducers} from 'redux';

import products from './productsReducer';
import cart from './cartReducer';
import order from './orderReducer';

export default combineReducers({
  products,
  cart,
  order,
});
