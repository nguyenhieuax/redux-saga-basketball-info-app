/**
 * @format
 */
import {name as appName} from './app.json';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootSaga from './services/saga';
import reducer from './services/reducer';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
