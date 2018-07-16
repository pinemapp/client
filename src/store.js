import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import appReducers from './reducers';
import appSaga from './sagas';

const configure = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ];

  if (__DEV__) {
    const logger = require('redux-logger').default;
    middlewares.push(logger);
  }

  const store = createStore(
    connectRouter(history)(appReducers),
    compose(applyMiddleware(...middlewares))
  );

  if (__DEV__) {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextReducers = require('./reducers').default;
        store.replaceReducer(nextReducers);
      });
    }
  }

  sagaMiddleware.run(appSaga);

  return store;
}

export default configure;
