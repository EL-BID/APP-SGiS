import {
  SHOW_INCIDENCIAS,
  SHOW_INCIDENCIAS_SUCCESS,
  SHOW_INCIDENCIAS_FAIL,
  REFRESH_TOKEN,
  REFRESH_TOKEN_FAIL,
  NEXT_PAGE
} from '../constants/ActionTypes';

const initialState = {
  loading: false,
  listIncidencias: [],
  page: 0,
  limit: 15,
  error: null,  
  refreshing: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_INCIDENCIAS:
      return { ...state, loading: true, page: action.payload };
    case SHOW_INCIDENCIAS_SUCCESS:
      return { ...state, listIncidencias: [...state.listIncidencias, ...action.payload], loading: false };
    case SHOW_INCIDENCIAS_FAIL:
      return { ...state, error: action.payload, loading: false };
    case REFRESH_TOKEN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case NEXT_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
