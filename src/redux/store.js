import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

var composeEnhancer = compose;

if (process.env.REACT_APP_ENV != "prod") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(reduxThunk))
);
export default store;
