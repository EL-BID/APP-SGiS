import axios from 'axios';
import { db } from '../../utils/db';
import {
  SHOW_CLUES,
  SHOW_CLUES_SUCCESS,
  SHOW_CLUES_FAIL,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL
} from '../../constants/ActionTypes';

const URL = 'http://api.ugus.bid/public/api/v1/';

export const showClues = (clues, token, page, limit) => 
  (dispatch) => {
    dispatch({ type: SHOW_CLUES, payload: page + 15 });

    axios.get(`${URL}clues?pagina=${page}&limite=${limit}`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
     .then(response => {
        showCluesSuccess(dispatch, response.data.data);
      })
     .catch((error) => {
        showCluesFail(dispatch, error.response.status, token);
      });
  };

const showCluesSuccess = (dispatch, response) => {
  const clues = response;

  dispatch({
    type: SHOW_CLUES_SUCCESS,
    payload: clues
  });
};

const showCluesFail = (dispatch, error, token) => {
  if (error === 403) {
    refreshToken(dispatch, token);
  }
  if (error === 500) {
    dispatch({ 
      type: SHOW_CLUES_FAIL, 
      payload: error 
    });
  }
};

const refreshToken = (dispatch, token) => {
  //dispatch({ type: REFRESH_TOKEN });
  axios.post(`${URL}refresh-token`, { }, { headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer '.concat(token)
    } })
  .then(response => {
    refreshTokenSuccess(dispatch, response.data.access_token);
  })
  .catch(error => {
    refreshTokenFail(dispatch, error);
  });
};

const refreshTokenSuccess = (dispatch, token) => {
  db.transaction((tx) => {
    tx.executeSql('UPDATE configuracion SET token=?', [token]);
    dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: token });
  });
};

const refreshTokenFail = (dispatch, error) => {
  dispatch({ 
    type: REFRESH_TOKEN_FAIL, 
    payload: error
  });
};
