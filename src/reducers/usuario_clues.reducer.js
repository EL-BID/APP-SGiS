import {
  SHOW_USUARIO_CLUES
} from '../constants/ActionTypes';

const initialState = {
  list: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_USUARIO_CLUES:
      return Object.assign({}, state, { list: action.payload });
    default:
      return state;
  }
}
