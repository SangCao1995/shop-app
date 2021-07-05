import {productTypes} from './actionTypes';

export const productActions = {
  deleteProduct,
  createProduct,
  editProduct,
};

function deleteProduct(data) {
  return {
    type: productTypes.DELETE_PRODUCT,
    data,
  };
}

function createProduct(data) {
  return {
    type: productTypes.CREATE_PRODUCT,
    data,
  };
}

function editProduct(data) {
  return {
    type: productTypes.EDIT_PRODUCT,
    data,
  };
}
