import {
  GET_TOKEN,
  SHOW_INCIDENCIAS
} from '../constants/ActionTypes';

const initialState = {
  search: '',
  token: null,
  listIncidencias: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.payload };
    case SHOW_INCIDENCIAS:
      return Object.assign({}, state, { listIncidencias: action.payload });
    default:
      return state;
  }
}
