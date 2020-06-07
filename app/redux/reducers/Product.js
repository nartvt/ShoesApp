import {GET_PRODUCT_BY_ID} from '../actions/type';

let initialState = {
  productCurrent: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCT_BY_ID:
      state.productCurrent = payload;
      return {...state};
    default:
      return state;
  }
};
