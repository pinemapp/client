import { all } from 'redux-saga/effects';
import sessionSaga from './session';
import userSaga from './user';
import boardsSaga from './boards';

export default function *rootSaga() {
  yield all([
    userSaga(),
    sessionSaga(),
    boardsSaga(),
  ]);
}
