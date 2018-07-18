import {
  FETCH_BOARDS_REQUEST,
  FETCH_BOARDS_SUCCESS,
  FETCH_BOARDS_FAILED
} from '../constants/boards';

export const fetchBoards = () => {
  return { type: FETCH_BOARDS_REQUEST };
}

export const fetchBoardsSuccess = (boards) => {
  return { type: FETCH_BOARDS_SUCCESS, payload: boards };
}

export const fetchBoardsFailed = () => {
  return { type: FETCH_BOARDS_FAILED };
}
