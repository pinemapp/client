import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILED
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
