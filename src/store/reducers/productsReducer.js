import {productsData} from '../../constants';

const initialState = {
  availableProducts: productsData,
  userProducts: productsData.filter(product => product.ownerId === 'u1'),
};

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;
