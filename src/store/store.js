import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import { combineReducers } from "redux";

import userReducer from "./loginReducer";
import feedReducer from "./feedReducer";
import fruitReducer from "./fruitReducer";
console.log("feedReducer", feedReducer);
console.log("fruitReducer", fruitReducer);
/**
 * read already saved state data from local storage
 */
const persistedState = loadFromLocalStorage();

/**
 * this will work on both firefox and chrome
 */
const composeEnhancers =
  window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * all environment middleware
 */
const middlewares = [thunk];

/**
 * combine reducers
 */
const rootReducer = combineReducers({
  user: userReducer,
  feeds: feedReducer,
  fruits: fruitReducer,
});

/**
 * STORE
 */
const store = createStore(
  rootReducer,
  persistedState, // initial store values (it will override the rootReducer state values)
  composeEnhancers(
    applyMiddleware(...middlewares) // middleware thunk...
  )
);

store.subscribe(() => {
  /**
   * write current state data to local storage
   */
  saveToLocalStorage(store.getState());
});

export default store;
