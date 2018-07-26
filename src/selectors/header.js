import { createSelector } from 'reselect';
import sessionSelector from './session';
import teamsSelector from './teams';

const headerSelector = state => state.header;
const inputClassSelector = createSelector(
  headerSelector,
  (header) => (header.isSearchFocus ? 'active' : '')
);

export default createSelector(
  headerSelector,
  sessionSelector,
  inputClassSelector,
  teamsSelector,
  (header, { token: _, ...session }, inputClass, team) => ({
    inputClass, ...session, ...header, team
  })
);
