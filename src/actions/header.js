import { SEARCH_FOCUS_TOGGLE } from '../constants/header';

export const toggleSearchFocus = (isFocus) => {
  return {
    payload: isFocus,
    type: SEARCH_FOCUS_TOGGLE
  };
}
