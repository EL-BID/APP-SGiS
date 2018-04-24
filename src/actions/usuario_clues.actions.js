import { db } from '../utils/db';
import {
  SHOW_USUARIO_CLUES
} from '../constants/ActionTypes';

export const showUsuarioClues = () => 
  (dispatch) => {
    const query = 'SELECT usuario_clues FROM configuracion';
    const params = [];

    db.transaction((tx) => {
      tx.executeSql(query, params, (tx, results) => {
          const len = results.rows.length;
          if (len > 0) {
            const row = results.rows.item(0);
            dispatch({ type: SHOW_USUARIO_CLUES, payload: JSON.parse(row.usuario_clues) });
          }
         });
    });
  };

