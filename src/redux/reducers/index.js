import { combineReducers } from 'redux';
import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers';
import AppNavigator from '../../navigators/AppNavigator';

import authReducer from './auth.reducer';
import usuarioCluesReducer from './usuario_clues.reducer';
import incidenciasReducer from './incidencias.reducer';
import censoReducer from './censo.reducer';
import cluesReducer from './clues.reducer';
import catalogsReducer from './catalogs.reducer';
import estadoFuerzaReducer from './estado_fuerza.reducer';

const navReducer = createNavigationReducer(AppNavigator);

const AppReducer = combineReducers({
  nav: navReducer,
  auth: authReducer,
  usuarioClues: usuarioCluesReducer,
  incidencias: incidenciasReducer,
  censo: censoReducer,
  cluesR: cluesReducer,
  catalogs: catalogsReducer,
  estadoFuerza: estadoFuerzaReducer
});

export default AppReducer;
