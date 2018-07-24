import { all } from 'redux-saga/effects';
import sessionSaga from './session';
import userSaga from './user';
import projectsSaga from './projects';

export default function *rootSaga() {
  yield all([
    userSaga(),
    sessionSaga(),
    projectsSaga(),
  ]);
}
