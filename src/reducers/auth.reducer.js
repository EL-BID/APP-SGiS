import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_TOKEN,
  GET_TOKEN_FAIL,
  GET_CLUES
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
      return { ...state, token: action.payload, isLoggedIn: true };
    case GET_TOKEN_FAIL:
      return { ...state, token: action.payload, };
    case GET_CLUES:
      return { ...state, clues: action.payload, isSelectClues: true };
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, isLoggedIn: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
}
