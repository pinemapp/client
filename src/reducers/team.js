import { combineReducers } from 'redux';
import {
  FETCH_TEAMS_REQUEST,
  FETCH_TEAMS_SUCCESS,
  FETCH_TEAMS_FAILED
} from '../constants/teams';

const data = (state = [], action) => {
  switch (action.type) {
    case FETCH_TEAMS_REQUEST:
      return [];
    case FETCH_TEAMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_TEAMS_FAILED:
    case FETCH_TEAMS_SUCCESS:
      return false
    case FETCH_TEAMS_REQUEST:
      return true;
    default:
      return state;
  }
}

export default combineReducers({ data, loading });
