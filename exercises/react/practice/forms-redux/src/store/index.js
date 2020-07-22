import { createStore, combineReducers } from 'redux';
import listReducer from '../reducer/index';

const root = combineReducers({ listReducer });

const store = createStore(root);

export default store;