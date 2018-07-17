import { combineReducers } from 'redux';
import { SEARCH_FOCUS_TOGGLE } from '../constants/header';

const items = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const isSearchFocus = (state = false, action) => {
  switch (action.type) {
    case SEARCH_FOCUS_TOGGLE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  items,
  isSearchFocus,
});
