import axios from 'axios';
import { db } from '../../utils/db';
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
  INSERT_SELECT_CLUES
} from '../../constants/ActionTypes';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
  });

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
  });

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

const URL = 'http://api.ugus.bid/public/api/v1';
//const token = 'Bearer '.concat(this.state.token);
const config = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Disponible: false
  }
};

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

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

export const insertSelectClues = (clues) => 
  (dispatch) => {
    db.transaction((tx) => {
      tx.executeSql('UPDATE configuracion SET clues=?', [clues]);
      dispatch({ type: INSERT_SELECT_CLUES, payload: clues });
    });
  };
