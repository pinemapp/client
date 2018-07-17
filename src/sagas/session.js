import { takeLatest, put, call } from 'redux-saga/effects';

import fetchTokenApi from '../apis/session';
import { SESSION_REQUEST } from '../constants/session';
import { setSession, sessionFailed } from '../actions/session';

function* fetchToken(action) {
  try {
    const body = yield call(fetchTokenApi, action.payload);
    yield put(setSession(body.token));
  } catch (e) {
    yield put(sessionFailed());
  }
}

function* authenticate() {
  yield takeLatest(SESSION_REQUEST, fetchToken)
}

export default authenticate;
