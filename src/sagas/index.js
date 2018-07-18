import { all } from 'redux-saga/effects';
import sessionSaga from './session';
import userSaga from './user';

export default function *rootSaga() {
  yield all([
    userSaga(),
    sessionSaga(),
  ]);
}
