import teamReducer from "./reducer";
import { combineReducers } from "redux";

//Aquí se combinan los reducers de Redux

const allReducer = combineReducers({
  teamReducer: teamReducer,
});

export default allReducer;
