import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import appSaga from './sagas';
import appReducers from './reducers';
import token from './utils/token';
import { setSession } from './actions/session';
import sessionMiddleware from './middlewares/session';

const configure = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [
    thunk,
    routerMiddleware(history),
    sessionMiddleware,
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

  const value = token.get();
  if (value) {
    store.dispatch(setSession(value));
  }

  return store;
}

export default configure;
