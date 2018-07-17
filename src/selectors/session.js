import jwtDecode from 'jwt-decode';
import { createSelector } from 'reselect';

const sessionSelector = (state) => state.session;
const userSelector = createSelector(
  sessionSelector,
  (session) => session.token ? jwtDecode(session.token) : null
)

export default createSelector(
  sessionSelector,
  userSelector,
  (session, user) => ({ user, ...session })
);
