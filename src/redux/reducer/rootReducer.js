import { combineReducers } from "redux";
import bookReducer from "./bookreducer";

const rootReducer = combineReducers({
  bookReducer,
});
export default rootReducer;
