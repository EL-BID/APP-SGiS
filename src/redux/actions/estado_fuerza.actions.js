import axios from 'axios';
import {
  SHOW_ESTADO_FUERZA,
  SHOW_ESTADO_FUERZA_SUCCESS,
  SHOW_ESTADO_FUERZA_FAIL,
  CREATE_ITEM_ARRAY,
  CREATE_CARTERA_SERVICIOS_ARRAY
} from '../../constants/ActionTypes';

const URL = 'http://api.ugus.bid/public/api/v1/';

export const showEstadoFuerza = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_ESTADO_FUERZA });

    axios.get(`${URL}estados-fuerza/2`, { headers: {
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

export const insertNewEstadoFuerza = ({ clues, token, incidencias_id, fotoReferencia }) =>
  (dispatch) => {
    dispatch({ type: INSERT_NEW_PHOTO_REFERENCIA });
    
    axios.put(`${URL}incidencias/${incidencias_id}`, fotoReferencia, { 
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '.concat(token),
        clues
      } 
    })
    .then(response => {
      console.log(response);
      insertNewEstadoFuerzaSuccess(dispatch, response.data);
    })
    .catch(error => {
      console.log(error.response);
      //insertNewPhotoReferenciaFail(dispatch);
    });
  };

const insertNewEstadoFuerzaSuccess = (dispatch, response) => {
  dispatch({
    type: INSERT_NEW_PHOTO_REFERENCIA_SUCCESS,
    payload: 'ok'
  });
};

export const arrayItemCreated = (subItem, itemsArray) => {
  const item = {};
  item.id = subItem.id;
  item.nombre = subItem.nombre;
  item.cartera_servicios_id = subItem.cartera_servicios_id;
  item.tipos_items_id = subItem.tipos_items_id;
  item.respuesta = true;
  
  const arrayItems = [];
  arrayItems.push(item);

  return {
    type: CREATE_ITEM_ARRAY,
    item,
    arrayItems
  };
};

export const arrayCarteraCreated = (subItem, itemsArray, carteraServicioArray) => {
  const carteraServicio = {};
  carteraServicio.id = subItem.cartera_servicios_id;
  carteraServicio.items = itemsArray;

  const arrayCarteraServicio = [];
  arrayCarteraServicio.push(carteraServicio);

  return {
    type: CREATE_CARTERA_SERVICIOS_ARRAY,
    carteraServicio,
    arrayCarteraServicio
  };
};
