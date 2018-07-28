import { toClientErrors } from '../utils/errors';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { FETCH_PROJECTS_REQUEST, CREATE_PROJECT_REQUEST, UPDATE_PROJECT_REQUEST } from '../constants/projects';
import * as ProjectAPI from '../apis/projects';
import * as ProjectActions from '../actions/projects';

function* fetchProjects() {
  try {
    const projects = yield call(ProjectAPI.fetchProjects);
    yield put(ProjectActions.fetchProjectsSuccess(projects));
  } catch (err) {
    yield put(ProjectActions.fetchProjectsFailed());
  }
}

function* createProject(action) {
  try {
    const project = yield call(ProjectAPI.createProject, action.payload);
    yield put(ProjectActions.createProjectSuccess(project));
  } catch (err) {
    yield put(ProjectActions.createProjectFailed(toClientErrors(err.errors)));
  }
}

function* updateProject(action) {
  try {
    const project = yield call(ProjectAPI.updateProject, action.payload);
    yield put(ProjectActions.updateProjectSuccess(project));
  } catch (err) {
    yield put(ProjectActions.updateProjectFailed(toClientErrors(err.errors)));
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_PROJECTS_REQUEST, fetchProjects),
    takeLatest(CREATE_PROJECT_REQUEST, createProject),
    takeLatest(UPDATE_PROJECT_REQUEST, updateProject)
  ]);
}
