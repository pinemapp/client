import { createSelector } from 'reselect';

const teamsSelector = (state) => state.team;
export default createSelector(
  teamsSelector,
  (team) => ({ ...team })
);
