import { createSelector } from 'reselect';

const sessionSelector = (state) => state.session;

export default createSelector(
  sessionSelector,
  (session) => ({ ...session })
);
