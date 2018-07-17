import { combineReducers } from 'redux';

import {
  REVOKE_SESSION,
  SESSION_REQUEST,
  SESSION_SUCCESS,
  SESSION_FAILED
} from '../constants/session';

const token = (state = null, action) => {
  switch (action.type) {
    case SESSION_SUCCESS:
      return action.payload;
    case SESSION_REQUEST:
    case SESSION_FAILED:
    case REVOKE_SESSION:
      return null;
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case SESSION_SUCCESS:
    case SESSION_FAILED:
    case REVOKE_SESSION:
      return false;
    case SESSION_REQUEST:
      return true;
    default:
      return state;
  }
}

const error = (state = false, action) => {
  switch (action.type) {
    case SESSION_SUCCESS:
    case SESSION_REQUEST:
    case REVOKE_SESSION:
      return false;
    case SESSION_FAILED:
      return true;
    default:
      return state;
  }
}

export default combineReducers({ token, loading, error });
