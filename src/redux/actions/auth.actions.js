import axios from 'axios';
import { db } from '../../utils/db';
import { URL } from '../../services/api';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_TOKEN,
  GET_TOKEN_FAIL,
  GET_CLUES,
  GET_CLUES_FAIL,
  GET_USUARIO,
  GET_USUARIO_FAIL,
  INSERT_SELECT_CLUES
} from '../../constants/ActionTypes';

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla SignIn
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
  });

 /**
 * Función que sirve para enviar al reducer los datos que se reciben desde la pantalla SignIn
 * cada que se actualiza el contenido del form
 *
 * @param {*} text
 */
export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
  });

 /**
 * Función que sirve para obtener la clues del usuario guardada en base de datos local (SQLite)
 *
 */
export const getClues = () =>
  (dispatch) => {
    const query = 'SELECT clues FROM configuracion';
    const params = [];

    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
        const len = results.rows.length;
        if (len > 0) {
          const row = results.rows.item(0);
          dispatch({ type: GET_CLUES, clues: row.clues });
        } else {
          dispatch({ type: GET_CLUES_FAIL, clues: 'clues' });
        }
        });
    });
  };

 /**
 * Función que sirve para obtener el token del usuario guardada en base de datos local (SQLite)
 *
 */
export const getToken = () =>
  (dispatch) => {
    const query = 'SELECT token FROM configuracion';
    const params = [];

    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
        const len = results.rows.length;
        if (len > 0) {
          const row = results.rows.item(0);
          dispatch({ type: GET_TOKEN, token: row.token });
        } else {
          dispatch({ type: GET_TOKEN_FAIL, token: 'token' });
        }
        });
    });
  };

 /**
 * Función que sirve para obtener la clues del usuario guardada en base de datos local (SQLite)
 *
 */
export const getUser = () =>
  (dispatch) => {
    const query = 'SELECT usuario FROM configuracion';
    const params = [];

    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
        const len = results.rows.length;
        if (len > 0) {
          const row = results.rows.item(0);
          dispatch({ type: GET_USUARIO, usuario: row.usuario });
        } else {
          dispatch({ type: GET_USUARIO_FAIL, usuario: 'usuario' });
        }
        });
    });
  };

//const token = 'Bearer '.concat(this.state.token);
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Disponible: false
  }
};

 /**
 * Función que sirve para enviar la peticion a la API
 * y realizar el logueo del usuario
 *
 * @param {*} email
 * @param {*} password
 */
export const loginUser = ({ email, password }) =>
  (dispatch) => {
    dispatch({ type: LOGIN_USER });

    axios.post(`${URL}/signin`, { email, password }, config)
    .then(response => {
      loginUserSuccess(dispatch, response.data);
    })
    .catch(error => {
      loginUserFail(dispatch);
    });
  };

 /**
 * Función que se usa cuando la respuesta sea correcta
 * e inserta la informacion del usuario en la base de datos local (SQLite)
 *
 * @param {*} dispatch
 * @param {*} user informacion del usuario
 */
const loginUserSuccess = (dispatch, user) => {
  const { access_token, server_info, usuario, usuario_clues } = user;

  db.transaction((tx) => {
    tx.executeSql(`INSERT INTO configuracion 
                  (server_info, token, usuario, usuario_clues) 
                  VALUES (?,?,?,?)`,
    [JSON.stringify(server_info), access_token,
    JSON.stringify(usuario), JSON.stringify(usuario_clues)]);
  });

  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: access_token
  });
};

 /**
 * Función que se usa cuando la respuesta fallo
 *
 * @param {*} dispatch
 */
const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

 /**
 * Funcion que sirve para insertar la clues seleccionada por el usuario
 * a la base de datos local (SQLite)
 *
 * @param {*} clues
 */
export const insertSelectClues = (clues) => 
  (dispatch) => {
    db.transaction((tx) => {
      tx.executeSql('UPDATE configuracion SET clues=?', [clues]);
      dispatch({ type: INSERT_SELECT_CLUES, payload: clues });
    });
  };
