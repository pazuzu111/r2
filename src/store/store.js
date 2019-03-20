import {createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers/reducers'
const saga = createSagaMiddleware()


export const store = createStore(
  reducers,
  applyMiddleware(saga)
);

