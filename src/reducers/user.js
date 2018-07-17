import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED
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

export default combineReducers({ loading });
