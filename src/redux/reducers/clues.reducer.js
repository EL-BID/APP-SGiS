import {
  SHOW_CLUES,
  SHOW_CLUES_SUCCESS,
  SHOW_CLUES_FAIL,
  REFRESH_TOKEN_FAIL
} from '../../constants/ActionTypes';

const initialState = {
  loading: false,
  listClues: [],
  page: 0,
  limit: 15,
  error: null,  
  refreshing: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_CLUES:
      return { ...state, loading: true, page: action.payload };
    case SHOW_CLUES_SUCCESS:
      return { ...state, listClues: [...state.listClues, ...action.payload], loading: false };
    case SHOW_CLUES_FAIL:
      return { ...state, error: action.payload, loading: false };
    case REFRESH_TOKEN_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
