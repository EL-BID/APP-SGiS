import { combineReducers } from 'redux';

import navReducer from './nav.reducer';
import authReducer from './auth.reducer';
import usuarioCluesReducer from './usuario_clues.reducer';
import incidenciasReducer from './incidencias.reducer';
import censoReducer from './censo.reducer';
import cluesReducer from './clues.reducer';

const AppReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  usuarioClues: usuarioCluesReducer,
  incidencias: incidenciasReducer,
  censo: censoReducer,
  cluesR: cluesReducer
});

export default AppReducer;
