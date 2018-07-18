import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  CLEAR_USER_ERROR
} from '../constants/user';

export function createUser(payload) {
  return { type: CREATE_USER_REQUEST, payload };
}

export function createUserSuccess(user) {
  return { type: CREATE_USER_SUCCESS, payload: user };
}

export function createUserFailed(errors) {
  return { type: CREATE_USER_FAILED, payload: errors };
}

export function clearError(key) {
  return { type: CLEAR_USER_ERROR, payload: key };
}
