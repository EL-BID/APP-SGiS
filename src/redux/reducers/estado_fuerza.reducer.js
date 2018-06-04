import {
  SHOW_ESTADO_FUERZA,
  SHOW_ESTADO_FUERZA_SUCCESS,
  SHOW_ESTADO_FUERZA_FAIL,
  CREATE_ITEM_ARRAY,
  CREATE_CARTERA_SERVICIOS_ARRAY
} from '../../constants/ActionTypes';

const initialState = {
  loading: false,
  listEstadoFuerza: [],
  page: 0,
  limit: 20,
  error: null,
  refreshing: false,
  isSave: null,

  item: {},
  itemsArray: [],
  carteraServicio: {},
  carteraServicioArray: [],
  estadoFuerzaObject: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_ESTADO_FUERZA:
      return { ...state, loading: true };
    case SHOW_ESTADO_FUERZA_SUCCESS:
      return { ...state, listEstadoFuerza: action.payload, loading: false };
    case SHOW_ESTADO_FUERZA_FAIL:
      return { ...state, error: action.payload, loading: false };
    case CREATE_ITEM_ARRAY:
      return { 
        ...state, 
        item: action.item,
        itemsArray: [
          ...state.itemsArray.filter((x) => 
          !action.arrayItems.find((y) => y.cartera_servicios_id === x.cartera_servicios_id)),
          ...action.arrayItems
        ]
      };
    case CREATE_CARTERA_SERVICIOS_ARRAY:
      return { 
        ...state, 
        carteraServicio: action.carteraServicio,
        carteraServicioArray: [
          ...state.carteraServicioArray.filter((x) => 
          !action.arrayCarteraServicio.find((y) => y.id === x.id)),
          ...action.arrayCarteraServicio
        ]
      };
    default:
      return state;
  }
}
