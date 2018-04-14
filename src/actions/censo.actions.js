import axios from 'axios';
import { db } from '../utils/db';
import {
  SHOW_CENSO,
  SHOW_CENSO_SUCCESS,
  SHOW_CENSO_FAIL,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  NEXT_PAGE
} from '../constants/ActionTypes';

const URL = 'http://api.ugus.bid/public/api/v1/';

export const showCenso = (clues, token, page, limit) => 
  (dispatch) => {
    dispatch({ type: SHOW_CENSO, payload: page + 15 });

    axios.get(`${URL}censo-personas?pagina=${page}&limite=${limit}`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
     .then(response => {
        showCensoSuccess(dispatch, response.data.data);
      })
     .catch((error) => {
        showCensoFail(dispatch, error.response.status, token);
      });
  };

const showCensoSuccess = (dispatch, response) => {
  const censo = response;

  dispatch({
    type: SHOW_CENSO_SUCCESS,
    payload: censo
  });
};

const showCensoFail = (dispatch, error, token) => {
  if (error === 403) {
    refreshToken(dispatch, token);
  }
  if (error === 500) {
    dispatch({ 
      type: SHOW_CENSO_FAIL, 
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
