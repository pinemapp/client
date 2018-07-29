import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import {
  faSearch,
  faCog,
  faPlus,
  faUsers,
  faArchive,
  faBell,
  faCaretDown,
  faEdit,
  faTrashAlt,
  faUserAlt,
  faCogs,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

import App from './app';

library.add(
  far, faSearch, faCog,
  faPlus, faUsers, faArchive,
  faBell, faCaretDown, faEdit,
  faTrashAlt, faUserAlt, faCogs,
  faSignOutAlt
);
ReactDOM.render(<App />, document.getElementById('app'));
