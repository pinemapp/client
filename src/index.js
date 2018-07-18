import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCog } from '@fortawesome/free-solid-svg-icons';

import App from './app';

library.add(faSearch, faCog);
ReactDOM.render(<App />, document.getElementById('app'));
