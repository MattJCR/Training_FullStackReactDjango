//Punto intermedio donde van todos los reducers
import { combineReducers } from "redux";
import leadsReducer from "./leads";

export default combineReducers({
  leadsCombineReducer: leadsReducer,
});
