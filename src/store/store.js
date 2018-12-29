import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import apiReducer from '../store/reducers/apiReducer';
import uiReducer from '../store/reducers/uiReducer';

const rootReducer = combineReducers({
  apiReducer: apiReducer,
  uiReducer: uiReducer
});

let composeEnhancer = compose;

// if on dev mode use dev tools
// if dev tools not available use comnpose
if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
};

export default configureStore;
