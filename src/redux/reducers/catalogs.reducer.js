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
  
  const initialState = {
    loading: false,
    listMunicipios: [],
    listLocalidades: [],
    listEstadosEmbarazo: [],
    listDerechohabiente: [],
    listTurno: [],
    error: null
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case SHOW_MUNICIPIOS:
        return { ...state, loading: true };
      case SHOW_MUNICIPIOS_SUCCESS:
        return { ...state, listMunicipios: [...state.listMunicipios, ...action.payload], loading: false };
      case SHOW_LOCALIDADES:
        return { ...state, loading: true };
      case SHOW_LOCALIDADES_SUCCESS:
        return { ...state, listLocalidades: [...state.listLocalidades, ...action.payload], loading: false };
      case SHOW_ESTADOS_EMBARAZOS:
        return { ...state, loading: true };
      case SHOW_ESTADOS_EMBARAZOS_SUCCESS:
        return { ...state, listEstadosEmbarazo: [...state.listEstadosEmbarazo, ...action.payload], loading: false };
      case SHOW_DERECHOHABIENTES:
        return { ...state, loading: true };
      case SHOW_DERECHOHABIENTES_SUCCESS:
        return { ...state, listDerechohabiente: [...state.listDerechohabiente, ...action.payload], loading: false };
      case SHOW_TURNOS:
        return { ...state, loading: true };
      case SHOW_TURNOS_SUCCESS:
        return { ...state, listTurno: [...state.listTurno, ...action.turnos], loading: false };
      default:
        return state;
    }
  }
  
