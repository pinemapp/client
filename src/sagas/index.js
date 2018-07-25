import { all } from 'redux-saga/effects';
import sessionSaga from './session';
import userSaga from './user';
import projectsSaga from './projects';
import teamSaga from './teams';

export default function *rootSaga() {
  yield all([
    userSaga(),
    sessionSaga(),
    projectsSaga(),
    teamSaga(),
  ]);
}
