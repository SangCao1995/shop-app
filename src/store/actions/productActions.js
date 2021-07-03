import {productTypes} from './actionTypes';

export const productActions = {
  deleteProduct,
};

function deleteProduct(data) {
  return {
    type: productTypes.DELETE_PRODUCT,
    data,
  };
}
