import axios from 'axios';
import {FETCH_CATEGORIEST} from './type';

export const createAction = (type, payload) => ({
  type,
  payload,
});

const fetchCategoriest = payload => createAction(FETCH_CATEGORIEST, payload);

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
