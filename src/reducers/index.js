import { i18nState } from 'redux-i18n';
import { combineReducers } from 'redux';

import session from './session';
import user from './user';
import project from './project';
import team from './team';

export default combineReducers({
  session,
  user,
  i18nState,
  project,
  team,
});
