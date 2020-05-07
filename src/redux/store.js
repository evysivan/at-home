import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

// Logger with default options
import logger from "redux-logger";
const store = createStore(reducer, applyMiddleware(logger));

export default store;
