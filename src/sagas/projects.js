import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_PROJECTS_REQUEST } from '../constants/projects';
import { fetchProjects as fetchProjectsApi } from '../apis/projects';
import { fetchProjectsSuccess, fetchProjectsFailed } from '../actions/projects';

function* fetchProjects() {
  try {
    const projects = yield call(fetchProjectsApi);
    yield put(fetchProjectsSuccess(projects));
  } catch (err) {
    yield put(fetchProjectsFailed());
  }
}

export default function* () {
  yield takeLatest(FETCH_PROJECTS_REQUEST, fetchProjects)
}
