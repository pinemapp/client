import { i18nState } from 'redux-i18n';
import { combineReducers } from 'redux';

import header from './header';
import session from './session';
import user from './user';
import project from './project';

export default combineReducers({
  header,
  session,
  user,
  i18nState,
  project,
});
