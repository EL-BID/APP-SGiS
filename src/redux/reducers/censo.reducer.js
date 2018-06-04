import {
  SHOW_CENSO,
  SHOW_CENSO_SUCCESS,
  SHOW_CENSO_FAIL,
  REFRESH_TOKEN_FAIL,
  MUNICIPIO_CHANGED,
  LOCALIDAD_CHANGED,
  ESTADO_EMBARAZO_CHANGED,
  DERECHOHABIENTE_CHANGED,
  CURP_CHANGED,
  NOMBRE_CHANGED,
  PATERNO_CHANGED,
  MATERNO_CHANGED,
  DIRECCION_CHANGED,
  CELULAR_CHANGED,
  FECHA_NACIMIENTO_CHANGED,
  INSERT_NEW_PERSON,
  INSERT_NEW_PERSON_SUCCESS
} from '../../constants/ActionTypes';

const initialState = {
  loading: false,
  listCenso: [],
  page: 0,
  limit: 20,
  error: null,
  refreshing: false,

  id: '',
  nombre: '',
  paterno: '',
  materno: '',
  domicilio: '',
  municipios_id: 1,
  localidades_id: 1,
  telefono: '',
  fecha_nacimiento: '',
  estados_embarazos_id: 1,
  derechohabientes_id: 1,
  isSave: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_CENSO:
      return { ...state, loading: true };
    case SHOW_CENSO_SUCCESS:
      return { ...state, listCenso: [...state.listCenso, ...action.payload], loading: false };
    case SHOW_CENSO_FAIL:
      return { ...state, error: action.payload, loading: false };
    case REFRESH_TOKEN_FAIL:
      return { ...state, error: action.payload, loading: false };
    case MUNICIPIO_CHANGED:
      return { ...state, municipios_id: action.payload };
    case LOCALIDAD_CHANGED:
      return { ...state, localidades_id: action.payload };
    case ESTADO_EMBARAZO_CHANGED:
      return { ...state, estados_embarazos_id: action.payload };
    case DERECHOHABIENTE_CHANGED:
      return { ...state, derechohabientes_id: action.payload };
    case CURP_CHANGED:
      return { ...state, id: action.payload };
    case NOMBRE_CHANGED:
      return { ...state, nombre: action.payload };
    case PATERNO_CHANGED:
      return { ...state, paterno: action.payload };
    case MATERNO_CHANGED:
      return { ...state, materno: action.payload };
    case DIRECCION_CHANGED:
      return { ...state, domicilio: action.payload };
    case CELULAR_CHANGED:
      return { ...state, telefono: action.payload };
    case FECHA_NACIMIENTO_CHANGED:
      return { ...state, fecha_nacimiento: action.payload };
    case INSERT_NEW_PERSON:
      return { ...state, loading: true };
    case INSERT_NEW_PERSON_SUCCESS:
      return { ...state, isSave: true };
    default:
      return state;
  }
}
