import axios from 'axios';
import { URL } from '../../services/api';
import {
    SHOW_MUNICIPIOS,
    SHOW_MUNICIPIOS_SUCCESS,
    SHOW_LOCALIDADES,
    SHOW_LOCALIDADES_SUCCESS,
    SHOW_ESTADOS_EMBARAZOS,
    SHOW_ESTADOS_EMBARAZOS_SUCCESS,
    SHOW_DERECHOHABIENTES,
    SHOW_DERECHOHABIENTES_SUCCESS,
    SHOW_TURNOS,
    SHOW_TURNOS_SUCCESS
} from '../../constants/ActionTypes';

 /**
 * Función que sirve para enviar la peticion a la API
 * y obtener la lista del catalogo municipios
 *
 * @param {*} clues
 * @param {*} token
 */
export const showMunicipios = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_MUNICIPIOS });

    axios.get(`${URL}/municipios`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
    .then(response => {
        showMunicipioSuccess(dispatch, response.data.data);
      })
    .catch((error) => {
        showMunicipioFail(dispatch, error.response.status, token);
      });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const showMunicipioSuccess = (dispatch, response) => {
  const municipios = response;

  dispatch({
    type: SHOW_MUNICIPIOS_SUCCESS,
    payload: municipios
  });
};

 /**
 * Función que sirve para enviar la peticion a la API
 * y obtener la lista del catalogo municipios
 *
 * @param {*} clues
 * @param {*} token
 */
export const showLocalidades = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_LOCALIDADES });

    axios.get(`${URL}/localidades`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
    .then(response => {
        showLocalidadSuccess(dispatch, response.data.data);
      })
    .catch((error) => {
        showLocalidadFail(dispatch, error.response.status, token);
      });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const showLocalidadSuccess = (dispatch, response) => {
  const localidades = response;

  dispatch({
    type: SHOW_LOCALIDADES_SUCCESS,
    payload: localidades
  });
};

 /**
 * Función que sirve para enviar la peticion a la API
 * y obtener la lista del catalogo embarazos
 *
 * @param {*} clues
 * @param {*} token
 */
export const showEstadosEmbarazos = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_ESTADOS_EMBARAZOS });

    axios.get(`${URL}/estados-embarazos`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
    .then(response => {
        showEstadoEmbarazoSuccess(dispatch, response.data.data);
      })
    .catch((error) => {
        showEstadoEmbarazoFail(dispatch, error.response.status, token);
      });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const showEstadoEmbarazoSuccess = (dispatch, response) => {
  const edoEmbarazos = response;

  dispatch({
    type: SHOW_ESTADOS_EMBARAZOS_SUCCESS,
    payload: edoEmbarazos
  });
};

 /**
 /**
 * Función que sirve para enviar la peticion a la API
 * y obtener la lista del catalogo derechohabientes
 *
 * @param {*} clues
 * @param {*} token
 */
export const showDerechohabientes = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_DERECHOHABIENTES });

    axios.get(`${URL}/derechohabientes`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
    .then(response => {
        showDerechohabienteSuccess(dispatch, response.data.data);
      })
    .catch((error) => {
        showDerechohabienteFail(dispatch, error.response.status, token);
      });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const showDerechohabienteSuccess = (dispatch, response) => {
  const derechohabientes = response;

  dispatch({
    type: SHOW_DERECHOHABIENTES_SUCCESS,
    payload: derechohabientes
  });
};

 /**
 * Función que sirve para enviar la peticion a la API
 * y obtener la lista del catalogo turnos
 *
 * @param {*} clues
 * @param {*} token
 */
export const showTurnos = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_TURNOS });

    axios.get(`${URL}/turnos`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
    .then(response => {
        showTurnoSuccess(dispatch, response.data.data);
      })
    .catch((error) => {
        showTurnoFail(dispatch, error.response.status, token);
      });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * y enviar la informacion al reducer
 *
 * @param {*} dispatch
 * @param {*} response
 */
const showTurnoSuccess = (dispatch, response) => {
  const turnos = response;

  dispatch({
    type: SHOW_TURNOS_SUCCESS,
    turnos
  });
};

