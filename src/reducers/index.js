import { i18nState } from 'redux-i18n';
import { combineReducers } from 'redux';

import header from './header';
import session from './session';

export default combineReducers({
  header,
  session,
  i18nState,
});
