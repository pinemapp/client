import { combineReducers } from 'redux';
import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILED,

  CREATE_TEAM_REQUEST,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAILED,
  CLEAR_TEAM_ERROR
} from '../constants/teams';
import { REVOKE_SESSION } from '../constants/session';

const data = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
    case REVOKE_SESSION:
      return [];
    case FETCH_TEAMS_SUCCESS:
      return action.payload;
    case CREATE_TEAM_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_TEAMS_FAILED:
    case FETCH_TEAMS_SUCCESS:
    case CREATE_TEAM_FAILED:
    case CREATE_TEAM_SUCCESS:
      return false
    case FETCH_TEAMS_REQUEST:
    case CREATE_TEAM_REQUEST:
      return true;
    default:
      return state;
  }
}

const errors = (state = {}, action) => {
  switch (action.type) {
    case CREATE_TEAM_REQUEST:
    case CREATE_TEAM_SUCCESS:
      return {};
    case CREATE_TEAM_FAILED:
      return action.payload;
    case CLEAR_TEAM_ERROR:
      return { ...state, [action.payload]: null };
    default:
      return state;
  }
}

export default combineReducers({ data, loading, errors });
