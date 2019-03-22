import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from '../reducers/reducers'
import {mySaga}  from '../sagas/sagas'

const saga = createSagaMiddleware()

export const store = createStore(
  reducers,
  applyMiddleware(saga)
);

saga.run(mySaga);
