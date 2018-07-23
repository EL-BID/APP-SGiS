import {
  SHOW_ESTADO_FUERZA,
  SHOW_ESTADO_FUERZA_SUCCESS,
  SHOW_ESTADO_FUERZA_FAIL,
  CREATE_ITEM_ARRAY,
  CREATE_ITEM_FORM_ARRAY,
  TURNO_CHANGED,
  INSERT_NEW_STATE_STRONG,
  INSERT_NEW_STATE_STRONG_SUCCESS
} from '../../constants/ActionTypes';

const initialState = {
  loading: false,
  listEstadoFuerza: [],
  turnos_id: 1,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ESTADO_FUERZA:
      return { ...state, loading: true };
    case SHOW_ESTADO_FUERZA_SUCCESS:
      return { ...state, listEstadoFuerza: action.payload, loading: false };
    case SHOW_ESTADO_FUERZA_FAIL:
      return { ...state, error: action.payload, loading: false };
    case TURNO_CHANGED:
      return { ...state, turnos_id: action.payload };
    case CREATE_ITEM_ARRAY: {
      const newList = [...state.listEstadoFuerza];      
      newList[action.indexCartera].items[action.indexItem].respuesta = true;
      return {
        ...state,
        listEstadoFuerza: newList
      };
    }
    case CREATE_ITEM_FORM_ARRAY: {
      const newList = [...state.listEstadoFuerza];      
      newList[action.indexCartera].items[action.indexItem].respuesta = action.text;
      return {
        ...state,
        listEstadoFuerza: newList
      };
    }
    case INSERT_NEW_STATE_STRONG:
      return { ...state, loading: true };
    case INSERT_NEW_STATE_STRONG_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}
