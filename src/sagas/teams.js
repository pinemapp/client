import { toClientErrors } from '../utils/errors';
import { put, call, takeLatest, all } from 'redux-saga/effects';
import { FETCH_TEAMS_REQUEST, CREATE_TEAM_REQUEST } from '../constants/teams';
import { fetchTeams as fetchTeamsApi, createTeam as createTeamApi } from '../apis/teams';
import { fetchTeamsSuccess, fetchTeamsFailed, createTeamSuccess, createTeamFailed } from '../actions/teams';

function* fetchTeams() {
  try {
    const teams = yield call(fetchTeamsApi);
    yield put(fetchTeamsSuccess(teams));
  } catch (err) {
    yield put(fetchTeamsFailed());
  }
}

function* createTeam(action) {
  try {
    const team = yield call(createTeamApi, action.payload);
    yield put(createTeamSuccess(team));
  } catch (err) {
    yield put(createTeamFailed(toClientErrors(err.errors)));
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_TEAMS_REQUEST, fetchTeams),
    takeLatest(CREATE_TEAM_REQUEST, createTeam)
  ]);
}
