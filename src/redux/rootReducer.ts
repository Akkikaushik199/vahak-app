import { combineReducers } from "redux";

import stepCounterReducer from "./Types/reducer";

const rootReducer = combineReducers({
  counter: stepCounterReducer,
});

export default rootReducer;
