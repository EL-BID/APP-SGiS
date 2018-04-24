import axios from 'axios';
import { db } from '../utils/db';
import {
  SHOW_INCIDENCIAS,
  SHOW_INCIDENCIAS_SUCCESS,
  SHOW_INCIDENCIAS_FAIL,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  NEXT_PAGE
} from '../constants/ActionTypes';

const URL = 'http://api.ugus.bid/public/api/v1/';

export const nextPage = (page) => ({
  type: NEXT_PAGE,
  payload: page + 15
});

export const showIncidencias = (clues, token, page, limit) => 
  (dispatch) => {
    dispatch({ type: SHOW_INCIDENCIAS });

    axios.get(`${URL}incidencias?edo_incidencia=&pagina=${page}&limite=${limit}`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
     .then(response => {
        showIncidenciasSuccess(dispatch, response.data.data);
      })
     .catch((error) => {
        showIncidenciasFail(dispatch, error.response.status, token);
      });
  };

const showIncidenciasSuccess = (dispatch, response) => {
  const incidencias = response;
  incidencias.pop();

  dispatch({
    type: SHOW_INCIDENCIAS_SUCCESS,
    payload: incidencias
  });
};

const showIncidenciasFail = (dispatch, error, token) => {
  if (error === 403) {
    refreshToken(dispatch, token);
  }
  if (error === 500) {
    dispatch({ 
      type: SHOW_INCIDENCIAS_FAIL, 
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

export const onSearchChanged = (text, clues, token) => 
(dispatch) => {
  axios.get(`${URL}incidencias?buscar=true&valor=${text}`, { headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer '.concat(token),
    clues
    } })
    .then(response => {
        console.log(response.data);
        dispatch({ type: SHOW_INCIDENCIAS, payload: response.data.data });
    })
    .catch((error) => {
        console.log(`error ${error}`);
    });
};
