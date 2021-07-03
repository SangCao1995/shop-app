import {productsData} from '../../constants';
import {productTypes} from '../actions/actionTypes';

const initialState = {
  availableProducts: productsData,
  userProducts: productsData.filter(product => product.ownerId === 'u1'),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case productTypes.DELETE_PRODUCT:
      const userProductsDeleted = state.userProducts.filter(
        product => product.id !== action.data.id,
      );
      const availableProductsDelete = state.availableProducts.filter(
        product => product.id !== action.data.id,
      );
      return {
        ...state,
        userProducts: userProductsDeleted,
        availableProducts: availableProductsDelete,
      };
  }
  return state;
};

export default productsReducer;
