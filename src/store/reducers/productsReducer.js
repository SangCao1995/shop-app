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
    case productTypes.CREATE_PRODUCT:
      const newProduct = {
        id: new Date().toString(),
        ownerId: 'u1',
        title: action.data.title,
        imageUrl: action.data.imageUrl,
        price: action.data.price,
        description: action.data.description,
      };
      return {
        ...state,
        userProducts: state.userProducts.concat(newProduct),
        availableProducts: state.availableProducts.concat(newProduct),
      };
    case productTypes.EDIT_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        product => product.id === action.data.id,
      );
      const updatedProduct = {
        id: action.data.id,
        ownerId: state.userProducts[productIndex].ownerId,
        title: action.data.title,
        imageUrl: action.data.imageUrl,
        price: state.userProducts[productIndex].price,
        description: action.data.description,
      };
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableProducts.findIndex(
        product => product.id === action.data.id,
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        userProducts: updatedUserProducts,
        availableProducts: updatedAvailableProducts,
      };
  }
  return state;
};

export default productsReducer;
