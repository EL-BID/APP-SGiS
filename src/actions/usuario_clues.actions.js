import { db } from '../config/db';
import {
  SHOW_USUARIO_CLUES,
  INSERT_SELECT_CLUES
} from '../constants/ActionTypes';

export const showUsuarioClues = () => {
  return (dispatch, getState) => {
    const query = 'SELECT usuario_clues FROM configuracion';
    const params = [];

    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
          console.log('Query completed');
          const len = results.rows.length;
          if (len > 0) {
            const row = results.rows.item(0);
            dispatch({ type: SHOW_USUARIO_CLUES, payload: JSON.parse(row.usuario_clues) });
          }
         });
    });
  };
};

export const insertSelectClues = (clues) => {
  return (dispatch, getState) => {
    db.transaction((tx) => {
      tx.executeSql('UPDATE configuracion SET clues=?', [clues]);
      dispatch({ type: INSERT_SELECT_CLUES, payload: clues });
    });
  };
};
