import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_TEAMS_REQUEST } from '../constants/teams';
import { fetchTeams as fetchTeamsApi } from '../apis/teams';
import { fetchTeamsSuccess, fetchTeamsFailed } from '../actions/teams';

function* fetchTeams() {
  try {
    const teams = yield call(fetchTeamsApi);
    yield put(fetchTeamsSuccess(teams));
  } catch (err) {
    yield put(fetchTeamsFailed());
  }
}

export default function* () {
  yield takeLatest(FETCH_TEAMS_REQUEST, fetchTeams)
}
