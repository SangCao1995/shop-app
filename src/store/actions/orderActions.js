import {orderTypes} from './actionTypes';

export const orderActions = {
  addOrder,
};

function addOrder(data) {
  return {
    type: orderTypes.ADD_ORDER,
    data,
  };
}
