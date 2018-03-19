import {
  SHOW_USUARIO_CLUES,
  INSERT_SELECT_CLUES
} from '../constants/ActionTypes';

const initialState = {
  list: [],
  clues: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_USUARIO_CLUES:
      return Object.assign({}, state, { list: action.payload });
    case INSERT_SELECT_CLUES:
      return { ...state, clues: action.payload };
    default:
      return state;
  }
}
