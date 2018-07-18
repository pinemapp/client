import {
  SESSION_SUCCESS,
  SESSION_FAILED,
  SESSION_REQUEST,
  REVOKE_SESSION
} from '../constants/session';

import token from '../utils/token';

export default (state) => (next) => (action) => {
  const type = action.type;

  if (type === SESSION_SUCCESS) {
    token.set(action.payload);
  } else if (type === SESSION_REQUEST || type === SESSION_FAILED || type === REVOKE_SESSION) {
    token.remove();
  }

  return next(action);
}
