import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED
} from '../constants/user';

export function createUser(payload) {
  return { type: CREATE_USER_REQUEST, payload };
}

export function createUserSuccess(user) {
  return { type: CREATE_USER_SUCCESS, payload: user };
}

export function createUserFailed() {
  return { type: CREATE_USER_FAILED };
}
