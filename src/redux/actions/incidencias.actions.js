import axios from 'axios';
import { db } from '../../utils/db';
import { URL } from '../../services/api';
import {
  SHOW_INCIDENCIAS,
  SHOW_INCIDENCIAS_SUCCESS,
  SHOW_INCIDENCIAS_FAIL,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAIL,
  INSERT_NEW_PHOTO_REFERENCIA,
  INSERT_NEW_PHOTO_REFERENCIA_SUCCESS
} from '../../constants/ActionTypes';

 /**
 * Función que sirve para enviar la peticion a la API
 * y obtener la lista de incidencias
 *
 * @param {*} clues
 * @param {*} token
 * @param {*} page
 * @param {*} limit
 */
export const showIncidencias = (clues, token, page, limit) => 
  (dispatch) => {
    dispatch({ type: SHOW_INCIDENCIAS });

    axios.get(`${URL}/incidencias?en_transito=0&edo_incidencia=&pagina=${page}&limite=${limit}`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } }).then(response => {
        showIncidenciasSuccess(dispatch, response.data.data);
      }).catch((error) => {
        showIncidenciasFail(dispatch, error.response.status, token);
      });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const showIncidenciasSuccess = (dispatch, response) => {
  const incidencias = response;
  incidencias.pop();

  dispatch({
    type: SHOW_INCIDENCIAS_SUCCESS,
    payload: incidencias
  });
};

 /**
 * Función que se usa cuando la respuesta regresa un error
 * enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
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

 /**
 * Función que se usa para actulizar el token en caso de que este ya este caducado
 *
 * @param {*} dispatch
 * @param {*} token
 */
const refreshToken = (dispatch, token) => {
  //dispatch({ type: REFRESH_TOKEN });
  axios.post(`${URL}/refresh-token`, { }, { headers: {
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

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} token
 */
const refreshTokenSuccess = (dispatch, token) => {
  db.transaction((tx) => {
    tx.executeSql('UPDATE configuracion SET token=?', [token]);
    dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: token });
  });
};

 /**
 * Función que se usa cuando la respuesta regresa un error
 * enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} error
 */
const refreshTokenFail = (dispatch, error) => {
  dispatch({ 
    type: REFRESH_TOKEN_FAIL, 
    payload: error
  });
};

 /**
 * Función que se usa cuando la respuesta regresa un error
 * enviar la informacion al reducer
 *
 * @param {*} clues
 * @param {*} token
 * @param {*} incidencias_id
 * @param {*} fotoReferencia
 */
export const insertNewPhotoReference = ({ clues, token, incidencias_id, fotoReferencia }) =>
  (dispatch) => {
    dispatch({ type: INSERT_NEW_PHOTO_REFERENCIA });
    
    axios.put(`${URL}/incidencias/${incidencias_id}`, fotoReferencia, { 
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(token),
        clues
      } 
    })
    .then(response => {
      console.log(response);
      insertNewPhotoReferenceSuccess(dispatch, response.data);
    })
    .catch(error => {
      console.log(error.response);
      //insertNewPhotoReferenciaFail(dispatch);
    });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const insertNewPhotoReferenceSuccess = (dispatch, response) => {
  dispatch({
    type: INSERT_NEW_PHOTO_REFERENCIA_SUCCESS,
    payload: 'ok'
  });
};
