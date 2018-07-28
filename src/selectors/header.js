import { createSelector } from 'reselect';
import sessionSelector from './session';
import teamsSelector from './teams';

const headerSelector = state => state.header;

export default createSelector(
  headerSelector,
  sessionSelector,
  teamsSelector,
  (header, { token: _, ...session }, team) => ({
    ...session, ...header, team
  })
);
