import axios from 'axios';

import {
    SHOW_MUNICIPIOS,
    SHOW_MUNICIPIOS_SUCCESS,
    SHOW_LOCALIDADES,
    SHOW_LOCALIDADES_SUCCESS,
    SHOW_ESTADOS_EMBARAZOS,
    SHOW_ESTADOS_EMBARAZOS_SUCCESS,
    SHOW_DERECHOHABIENTES,
    SHOW_DERECHOHABIENTES_SUCCESS,
} from '../../constants/ActionTypes';

const URL = 'http://api.ugus.bid/public/api/v1/';

export const showMunicipios = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_MUNICIPIOS });

    axios.get(`${URL}municipios`, { headers: {
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

const showMunicipioSuccess = (dispatch, response) => {
  const municipios = response;

  dispatch({
    type: SHOW_MUNICIPIOS_SUCCESS,
    payload: municipios
  });
};

export const showLocalidades = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_LOCALIDADES });

    axios.get(`${URL}localidades`, { headers: {
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

const showLocalidadSuccess = (dispatch, response) => {
  const localidades = response;

  dispatch({
    type: SHOW_LOCALIDADES_SUCCESS,
    payload: localidades
  });
};

export const showEstadosEmbarazos = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_ESTADOS_EMBARAZOS });

    axios.get(`${URL}estados-embarazos`, { headers: {
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

const showEstadoEmbarazoSuccess = (dispatch, response) => {
  const edoEmbarazos = response;

  dispatch({
    type: SHOW_ESTADOS_EMBARAZOS_SUCCESS,
    payload: edoEmbarazos
  });
};

export const showDerechohabientes = (clues, token) => 
  (dispatch) => {
    dispatch({ type: SHOW_DERECHOHABIENTES });

    axios.get(`${URL}derechohabientes`, { headers: {
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

const showDerechohabienteSuccess = (dispatch, response) => {
  const derechohabientes = response;

  dispatch({
    type: SHOW_DERECHOHABIENTES_SUCCESS,
    payload: derechohabientes
  });
};

