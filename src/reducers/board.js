import { combineReducers } from 'redux';

import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILED
} from '../constants/boards';

const boards = (state = [], action) => {
  switch (action.type) {
    case FETCH_BOARDS_SUCCESS:
      return action.payload;
    case FETCH_BOARDS_FAILED:
      return [];
    default:
      return state;
  }
}

export default combineReducers({ boards });
