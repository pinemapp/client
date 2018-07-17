import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import App from './app';

library.add(faSearch);
ReactDOM.render(<App />, document.getElementById('app'));
