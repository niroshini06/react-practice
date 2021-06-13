import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";
import userReducer from "./userReducer";
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
 * STORE
 */
const store = createStore(
  userReducer,
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
