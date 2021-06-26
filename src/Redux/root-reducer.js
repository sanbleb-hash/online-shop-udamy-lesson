import { combineReducers } from "redux";

import userReducer from "./user/userReduce";

export default combineReducers({
  user: userReducer
});