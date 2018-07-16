import {
  SHOW_ESTADO_FUERZA,
  SHOW_ESTADO_FUERZA_SUCCESS,
  SHOW_ESTADO_FUERZA_FAIL,
  CREATE_ITEM_ARRAY
} from '../../constants/ActionTypes';

const initialState = {
  loading: false,
  listEstadoFuerza: [],
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
    case CREATE_ITEM_ARRAY: {
      const newList = [...state.listEstadoFuerza];
      newList[action.indexCartera].items[action.indexItem].respuesta = true;
      return {
        ...state,
        listEstadoFuerza: newList
      };
    }
    default:
      return state;
  }
}
