import {
  SHOW_INCIDENCIAS
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
      return Object.assign({}, state, { listIncidencias: action.payload });
    default:
      return state;
  }
}
