import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILED,

  CREATE_TEAM_REQUEST,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAILED
} from '../constants/teams';

export function fetchTeams() {
  return { type: FETCH_TEAMS_REQUEST };
}

export function fetchTeamsSuccess(teams) {
  return {
    payload: teams,
    type: FETCH_TEAMS_SUCCESS
  };
}

export function fetchTeamsFailed() {
  return { type: FETCH_TEAMS_FAILED };
}

export function createTeam(payload) {
  return { type: CREATE_TEAM_REQUEST, payload };
}

export function createTeamSuccess(team) {
  return { type: CREATE_TEAM_SUCCESS, payload: team };
}

export function createTeamFailed(errors) {
  return { type: CREATE_TEAM_FAILED, payload: errors };
}
