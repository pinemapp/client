import { combineReducers } from 'redux';

import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILED
} from '../constants/projects';
import { REVOKE_SESSION } from '../constants/session';

const projects = (state = [], action) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return action.payload;
    case FETCH_PROJECTS_REQUEST:
    case FETCH_PROJECTS_FAILED:
    case REVOKE_SESSION:
      return [];
    default:
      return state;
  }
}

const loading = (state = false, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return true;
    case FETCH_PROJECTS_SUCCESS:
    case FETCH_PROJECTS_FAILED:
      return false;
    default:
      return state;
  }
}

export default combineReducers({ projects, loading });
