import {
  REVOKE_SESSION,
  SESSION_FAILED,
  SESSION_REQUEST,
  SESSION_SUCCESS
} from '../constants/session';

export function fetchSession(payload) {
  return { type: SESSION_REQUEST, payload };
}

export function setSession(token) {
  return { type: SESSION_SUCCESS, payload: token };
}

export function sessionFailed() {
  return { type: SESSION_FAILED };
}

export function revokeSession() {
  return { type: REVOKE_SESSION };
}
