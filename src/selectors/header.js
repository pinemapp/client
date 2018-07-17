import { createSelector } from 'reselect';

const headerSelector = state => state.header;

const inputClassSelector = createSelector(
  headerSelector,
  (header) => (header.isSearchFocus ? 'active' : '')
);

export default createSelector(
  headerSelector,
  inputClassSelector,
  (header, inputClass) => ({ inputClass, ...header })
);
