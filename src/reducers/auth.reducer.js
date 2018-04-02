import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_TOKEN,
  GET_TOKEN_FAIL,
  GET_CLUES,
  GET_CLUES_FAIL,
  INSERT_SELECT_CLUES,
  REFRESH_TOKEN_SUCCESS
} from '../constants/ActionTypes';

const initialState = {
  email: '',
  password: '',
  error: '',
  loading: false,
  isLoggedIn: false,
  isSelectClues: false,
  clues: '',
  token: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TOKEN:
      return { ...state, token: action.payload, isSelectClues: true };
    case GET_TOKEN_FAIL:
      return { ...state, token: action.payload, };
    case GET_CLUES:
      return { ...state, clues: action.payload };
    case GET_CLUES_FAIL:
      return { ...state, clues: action.payload };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, token: action.payload, isLoggedIn: true };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    case INSERT_SELECT_CLUES:
      return { ...state, clues: action.payload, isSelectClues: true };
    case REFRESH_TOKEN_SUCCESS:
      return { ...state, token: action.payload };
    default:
      return state;
  }
}
