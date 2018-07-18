import { createSelector } from 'reselect';
import sessionSelector from './session';

const userSelector = state => state.user;

export default createSelector(
  userSelector,
  sessionSelector,
  (register, { user: user }) => ({ ...register, user })
);
