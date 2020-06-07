import {combineReducers} from 'redux';
import category from './category';
import product from './Product';

export default combineReducers({
  category: category,
  product,
});
