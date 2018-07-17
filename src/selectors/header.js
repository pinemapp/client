import { createSelector } from 'reselect';

import sessionSelector from './session';

const headerSelector = state => state.header;

const inputClassSelector = createSelector(
  headerSelector,
  (header) => (header.isSearchFocus ? 'active' : '')
);

export default createSelector(
  headerSelector,
  sessionSelector,
  inputClassSelector,
  (header, { token: _, ...session }, inputClass) => ({
    inputClass, ...session, ...header
  })
);
