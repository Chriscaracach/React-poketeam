import teamReducer from "./reducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  teamReducer: teamReducer,
});

export default allReducer;
