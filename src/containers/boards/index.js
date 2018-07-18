import { connect } from 'react-redux';
import { fetchBoards } from '../../actions/boards';
import BoardsIndex from '../../components/boards';
import boardsSelector from '../../selectors/boards';

export default connect(boardsSelector, { fetchBoards })(BoardsIndex);
