import React from 'react';
import I18n from 'redux-i18n';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import './styles/app.scss';

import configureStore from './store';
import Routes from './routes';
import translations from './locales';

const history = createBrowserHistory();
const store = configureStore(history);

const App = () => {
  return (
    <Provider store={store}>
      <I18n translations={translations}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </I18n>
    </Provider>
  );
};

export default App;
