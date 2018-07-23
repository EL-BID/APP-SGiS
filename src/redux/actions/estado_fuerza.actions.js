import axios from 'axios';
import { URL } from '../../services/api';
import {
  SHOW_ESTADO_FUERZA,
  SHOW_ESTADO_FUERZA_SUCCESS,
  SHOW_ESTADO_FUERZA_FAIL,
  CREATE_ITEM_ARRAY,
  CREATE_ITEM_FORM_ARRAY,
  TURNO_CHANGED,
  INSERT_NEW_STATE_STRONG,
  INSERT_NEW_STATE_STRONG_SUCCESS
} from '../../constants/ActionTypes';

export const showEstadoFuerza = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_ESTADO_FUERZA });

    axios.get(`${URL}/estados-fuerza/2`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
    .then(response => {
        showEstadoFuerzaSuccess(dispatch, response.data.data);
      })
    .catch((error) => {
        showEstadoFuerzaFail(dispatch, error.response.status, token);
      });
  };

const showEstadoFuerzaSuccess = (dispatch, response) => {
  console.log(response);
  
  const estadosFuerza = response.cartera_servicios;
  dispatch({
    type: SHOW_ESTADO_FUERZA_SUCCESS,
    payload: estadosFuerza
  });
};

const showEstadoFuerzaFail = (dispatch, error, token) => {
  if (error === 403) {
    //refreshToken(dispatch, token);
  }
  if (error === 500) {
    //sdsd
  }
  dispatch({ 
    type: SHOW_ESTADO_FUERZA_FAIL, 
    payload: error 
  });
};

export const insertNewEstadoFuerza = ({ clues, token, estadoFuerza }) =>
  (dispatch) => {
    dispatch({ type: INSERT_NEW_STATE_STRONG });
    
    axios.put(`${URL}/estados-fuerza/0`, estadoFuerza, { 
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(token),
        clues
      } 
    })
    .then(response => {
      insertNewEstadoFuerzaSuccess(dispatch, response.data);
    })
    .catch(error => {
      console.log(error.response);
      //insertNewPhotoReferenciaFail(dispatch);
    });
  };

const insertNewEstadoFuerzaSuccess = (dispatch, response) => {
  dispatch({
    type: INSERT_NEW_STATE_STRONG_SUCCESS,
    payload: 'ok'
  });
};

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const turnoChanged = (text) => ({
  type: TURNO_CHANGED,
  payload: text
});

export const arrayItemCreated = (indexItem, indexCartera, respuesta) => {
  return {
    type: CREATE_ITEM_ARRAY,
    indexItem,
    indexCartera,
    respuesta
  };
};

export const arrayItemFormCreated = (indexCartera, indexItem, text) => {
  return {
    type: CREATE_ITEM_FORM_ARRAY,
    indexItem,
    indexCartera,
    text
  };
};
