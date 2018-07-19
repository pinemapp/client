import { put, call, takeLatest } from 'redux-saga/effects';
import { FETCH_BOARDS_REQUEST } from '../constants/boards';
import { fetchBoards as fetchBoardsApi } from '../apis/boards';
import { fetchBoardsSuccess, fetchBoardsFailed } from '../actions/boards';

function* fetchBoards() {
  try {
    const boards = yield call(fetchBoardsApi);
    yield put(fetchBoardsSuccess(boards));
  } catch (err) {
    yield put(fetchBoardsFailed());
  }
}

export default function* () {
  yield takeLatest(FETCH_BOARDS_REQUEST, fetchBoards)
}
