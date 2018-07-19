import { createSelector } from 'reselect';

const boardsSelector = (state) => state.board;

export default createSelector(
  boardsSelector,
  (board) => ({ ...board })
);
