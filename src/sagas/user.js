import { createUserApi } from '../apis/user';
import { CREATE_USER_REQUEST } from '../constants/user';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createUserFailed, createUserSuccess } from '../actions/user';

function* createUser(action) {
  try {
    const user = yield call(createUserApi, action.payload);
    yield put(createUserSuccess(user));
  } catch (e) {
    yield put(createUserFailed());
  }
}

export default function* () {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}
