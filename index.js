/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import createSagaMiddleware from 'redux-saga';
// import {createStore, applyMiddleWare} from 'redux';
// import {logger} from 'redux-logger';
// import rootSaga from './services/saga';
// import reducer from './services/reducer';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer, applyMiddleWare(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => App);
