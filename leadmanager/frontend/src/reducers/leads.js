//Los reducers evaluan una accion como añadir, borrar, obtener, etc...
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "../actions/types.js";
const initialState = {
  leadsReducer: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leadsReducer: action.payload,
      };
    case DELETE_LEAD:
      return {
        ...state,
        leadsReducer: state.leadsReducer.filter(lead => lead.id !== action.payload),
      };
      case ADD_LEAD:
        return {
          ...state,
        leadsReducer: [...state.leadsReducer, action.payload],
        }
    default:
      return state;
  }
}
