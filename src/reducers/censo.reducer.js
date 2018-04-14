import {
  SHOW_CENSO,
  SHOW_CENSO_SUCCESS,
  SHOW_CENSO_FAIL,
  REFRESH_TOKEN_FAIL
} from '../constants/ActionTypes';

const initialState = {
  loading: false,
  listCenso: [],
  page: 0,
  limit: 15,
  error: null,  
  refreshing: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_CENSO:
      return { ...state, loading: true, page: action.payload };
    case SHOW_CENSO_SUCCESS:
      return { ...state, listCenso: [...state.listCenso, ...action.payload], loading: false };
    case SHOW_CENSO_FAIL:
      return { ...state, error: action.payload, loading: false };
    case REFRESH_TOKEN_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
