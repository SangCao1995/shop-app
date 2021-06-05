import {orderTypes} from '../actions/actionTypes';

const initialState = {
  order: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderTypes.ADD_ORDER:
      const newOrder = {
        id: new Date().toString(),
        items: action.data.items,
        totalAmount: action.data.totalAmount,
        date: new Date(),
      };
      return {...state, order: state.order.concat(newOrder)};
  }
  return state;
};

export default orderReducer;
