import axios from 'axios';

import {
  SHOW_INCIDENCIAS
} from '../constants/ActionTypes';

const URLB = 'http://api.ugus.bid/public/api/v1/incidencias?buscar=true&valor=';
const URL = 'http://api.ugus.bid/public/api/v1/incidencias';

export const showIncidencias = (clues, token, page, limit) => 
  (dispatch) => {
    axios.get(`${URL}?edo_incidencia=&pagina=${page}&limite=${limit}`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
     .then(response => {
         const incidencias = response.data.data;
         incidencias.pop();
         dispatch({ type: SHOW_INCIDENCIAS, payload: incidencias });
      })
     .catch((error) => {
         console.log('error ' + error);
      });
  };

export const onSearchChanged = (text, clues, token) => {
  return (dispatch, getState) => {
    axios.get(`${URLB}${text}`, { headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer '.concat(token),
      clues
      } })
     .then(response => {
         // If request is good...
         console.log(response.data);
         dispatch({ type: SHOW_INCIDENCIAS, payload: response.data.data });
      })
     .catch((error) => {
         console.log('error ' + error);
      });
  };
};
