import axios from 'axios';
import {
  SHOW_CENSO,
  SHOW_CENSO_SUCCESS,
  SHOW_CENSO_FAIL,
  MUNICIPIO_CHANGED,
  LOCALIDAD_CHANGED,
  ESTADO_EMBARAZO_CHANGED,
  DERECHOHABIENTE_CHANGED,
  CURP_CHANGED,
  NOMBRE_CHANGED,
  PATERNO_CHANGED,
  MATERNO_CHANGED,
  DIRECCION_CHANGED,
  CELULAR_CHANGED,
  FECHA_NACIMIENTO_CHANGED,
  INSERT_NEW_PERSON,
  INSERT_NEW_PERSON_SUCCESS
} from '../../constants/ActionTypes';

const URL = 'http://api.ugus.bid/public/api/v1/';

export const showCenso = (clues, token, page, limit) => 
  (dispatch) => {
    dispatch({ type: SHOW_CENSO });

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
    //refreshToken(dispatch, token);
  }
  if (error === 500) {
    //sdsd
  }
  dispatch({ 
    type: SHOW_CENSO_FAIL, 
    payload: error 
  });
};

export const insertNewPerson = ({ clues, token, id, nombre, paterno, materno, domicilio, municipios_id, localidades_id, telefono, fecha_nacimiento, estados_embarazos_id, derechohabientes_id }) =>
  (dispatch) => {
    dispatch({ type: INSERT_NEW_PERSON });
    const qs = require('qs');

    const data = { 
      id,
      nombre,
      paterno,
      materno,
      domicilio,
      municipios_id,
      localidades_id,
      telefono,
      fecha_nacimiento,
      estados_embarazos_id,
      derechohabientes_id,
    };

    axios.post(`${URL}censo-personas`, qs.stringify(data), { 
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer '.concat(token),
        clues
      } 
    })
    .then(response => {
      insertNewPersonSuccess(dispatch, response.data);
    })
    .catch(error => {
      //insertNewPersonFail(dispatch);
    });
  };

const insertNewPersonSuccess = (dispatch, response) => {
  dispatch({
    type: INSERT_NEW_PERSON_SUCCESS,
    payload: response
  });
};

export const municipioChanged = (text) => ({
  type: MUNICIPIO_CHANGED,
  payload: text
});

export const localidadChanged = (text) => ({
  type: LOCALIDAD_CHANGED,
  payload: text
});

export const estadoEmbarazoChanged = (text) => ({
  type: ESTADO_EMBARAZO_CHANGED,
  payload: text
});

export const derechohabienteChanged = (text) => ({
  type: DERECHOHABIENTE_CHANGED,
  payload: text
});

export const curpChanged = (text) => ({
  type: CURP_CHANGED,
  payload: text
});

export const nombreChanged = (text) => ({
  type: NOMBRE_CHANGED,
  payload: text
});

export const paternoChanged = (text) => ({
  type: PATERNO_CHANGED,
  payload: text
});

export const maternoChanged = (text) => ({
  type: MATERNO_CHANGED,
  payload: text
});

export const direccionChanged = (text) => ({
  type: DIRECCION_CHANGED,
  payload: text
});

export const celularChanged = (text) => ({
  type: CELULAR_CHANGED,
  payload: text
});

export const fechaNacimientoChanged = (text) => ({
  type: FECHA_NACIMIENTO_CHANGED,
  payload: text
});
