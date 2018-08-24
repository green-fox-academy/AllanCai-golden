import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CombineReducers from './reducers/index';

const store = createStore(CombineReducers, composeWithDevTools());

export default store;
