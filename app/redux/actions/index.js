import axios from 'axios';
import {FETCH_CATEGORIEST, GET_PRODUCT_BY_ID} from './type';

export const createAction = (type, payload) => ({
  type,
  payload,
});

const fetchCategoriest = payload => createAction(FETCH_CATEGORIEST, payload);

const fetchProductbyId = payload => createAction(GET_PRODUCT_BY_ID, payload);

export const actFetchCategoriest = () => {
  // async action
  return dispatch => {
    axios({
      method: 'GET',
      url: 'http://svcy3.myclass.vn/api/Product/getAllCategory',
    })
      .then(response => {
        // console.log(response);
        dispatch(fetchCategoriest(response.data.content));
      })
      .catch(err => {
        console.log(...err);
      });
  };
};

export const actGetProductById = id => {
  return dispatch => {
    axios({
      method: 'GET',
      url: `http://svcy3.myclass.vn/api/Product/getbyid?id=${id}`,
    })
      .then(response => {
        // console.log(response);
        dispatch(fetchProductbyId(response.data.content));
      })
      .catch(err => {
        console.log(...err);
      });
  };
};
