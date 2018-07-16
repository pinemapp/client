import { i18nState } from 'redux-i18n';
import { combineReducers } from 'redux';

import header from './header';

export default combineReducers({
  header,
  i18nState,
});
