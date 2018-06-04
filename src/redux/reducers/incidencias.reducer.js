import {
  SHOW_INCIDENCIAS,
  SHOW_INCIDENCIAS_SUCCESS,
  SHOW_INCIDENCIAS_FAIL,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAIL,
  INSERT_NEW_PHOTO_REFERENCIA,
  INSERT_NEW_PHOTO_REFERENCIA_SUCCESS
} from '../../constants/ActionTypes';

const initialState = {
  loading: false,
  listIncidencias: [],
  limit: 30,
  error: null,  
  refreshing: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_INCIDENCIAS:
      return { ...state, loading: true };
    case SHOW_INCIDENCIAS_SUCCESS:
      return { 
        ...state, 
        listIncidencias: [
          ...state.listIncidencias.filter((x) => 
          !action.payload.find((y) => y.id === x.id)),
          ...action.payload
        ], 
        loading: false 
      };
    case SHOW_INCIDENCIAS_FAIL:
      return { ...state, error: action.payload, loading: false };
    case REFRESH_TOKEN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case INSERT_NEW_PHOTO_REFERENCIA:
      return { ...state };
    case INSERT_NEW_PHOTO_REFERENCIA_SUCCESS:
      return { ...state };
    default:
      return state;
  }
}
