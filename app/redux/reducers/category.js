import {FETCH_CATEGORIEST} from '../actions/type';

let initialState = {
  categoryCollections: [],
  selectedCategory: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_CATEGORIEST:
      state.categoryCollections = payload;
      return [...state];
    default:
      return state;
  }
};
