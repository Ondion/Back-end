import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { primeiroReducer, segundoReducer } from '../reducers';

const reducers = combineReducers({
  primeiroReducer,
  segundoReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
