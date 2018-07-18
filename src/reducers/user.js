import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  CLEAR_USER_ERROR
} from '../constants/user';
import { combineReducers } from 'redux';

const loading = (state = false, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return true;
    case CREATE_USER_SUCCESS:
    case CREATE_USER_FAILED:
      return false;
    default:
      return state;
  }
}

const errors = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
    case CREATE_USER_SUCCESS:
      return {};
    case CREATE_USER_FAILED:
      return action.payload;
    case CLEAR_USER_ERROR:
      return { ...state, [action.payload]: null };
    default:
      return state;
  }
}

export default combineReducers({ loading, errors });
