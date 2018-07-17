import {
  SESSION_SUCCESS,
  SESSION_FAILED,
  SESSION_REQUEST,
  REVOKE_SESSION
} from '../constants/session';

import storage from '../utils/storage';

export default (state) => (next) => (action) => {
  const type = action.type;

  if (type === SESSION_SUCCESS) {
    storage.setToken(action.payload);
  } else if (type === SESSION_REQUEST || type === SESSION_FAILED || type === REVOKE_SESSION) {
    storage.removeToken();
  }

  return next(action);
}
