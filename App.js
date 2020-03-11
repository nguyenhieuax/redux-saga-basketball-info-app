import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
// import {Provider} from 'react-redux';
// import store from './store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import rootSaga from './services/saga';
import reducer from './services/reducer';
import {actions} from './services/action'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

const ReduxProvider = ({children, reduxStore}) => (
  <Provider store={reduxStore}>{children}</Provider>
);

const Main = props => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  // const selector = useSelector();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>click me please</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => dispatch(actions.getListUserAction)}
        style={{backgroundColor: 'green', height: 100, width: 200}}>
        <Text>Linking to other appkjkh</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = props => {
  useEffect(() => {
    console.log('this is use effect');
  });

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
