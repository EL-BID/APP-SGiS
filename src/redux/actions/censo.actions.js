import axios from 'axios';
import { URL } from '../../services/api';
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

 /**
 * Función que sirve para enviar la peticion a la API
 * y obtener la lista del mujeres en el censo
 *
 * @param {*} clues
 * @param {*} token
 * @param {*} page
 * @param {*} limit
 */
export const showCenso = (clues, token, page, limit) => 
  (dispatch) => {
    dispatch({ type: SHOW_CENSO });

    axios.get(`${URL}/censo-personas?pagina=${page}&limite=${limit}`, { headers: {
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

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const showCensoSuccess = (dispatch, response) => {
  const censo = response;

  dispatch({
    type: SHOW_CENSO_SUCCESS,
    payload: censo
  });
};

 /**
 * Función que se usa cuando la respuesta regresa un error
 * enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
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

 /**
 * Función que sirve para enviar la peticion a la API
 * e insertar los datos en la base
 * @param {*} clues
 * @param {*} token
 */
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

    axios.post(`${URL}/censo-personas`, qs.stringify(data), { 
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

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const insertNewPersonSuccess = (dispatch, response) => {
  dispatch({
    type: INSERT_NEW_PERSON_SUCCESS,
    payload: response
  });
};

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const municipioChanged = (text) => ({
  type: MUNICIPIO_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const localidadChanged = (text) => ({
  type: LOCALIDAD_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const estadoEmbarazoChanged = (text) => ({
  type: ESTADO_EMBARAZO_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const derechohabienteChanged = (text) => ({
  type: DERECHOHABIENTE_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const curpChanged = (text) => ({
  type: CURP_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const nombreChanged = (text) => ({
  type: NOMBRE_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const paternoChanged = (text) => ({
  type: PATERNO_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const maternoChanged = (text) => ({
  type: MATERNO_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const direccionChanged = (text) => ({
  type: DIRECCION_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const celularChanged = (text) => ({
  type: CELULAR_CHANGED,
  payload: text
});

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla NuevoCenso
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const fechaNacimientoChanged = (text) => ({
  type: FECHA_NACIMIENTO_CHANGED,
  payload: text
});
