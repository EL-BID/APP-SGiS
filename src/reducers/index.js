import { combineReducers } from 'redux';

import navReducer from './nav.reducer';
import authReducer from './auth.reducer';
import usuarioCluesReducer from './usuario_clues.reducer';
import incidenciasReducer from './incidencias.reducer';

const AppReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  usuarioClues: usuarioCluesReducer,
  incidencias: incidenciasReducer
});

export default AppReducer;
