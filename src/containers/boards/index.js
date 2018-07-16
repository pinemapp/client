import { connect } from 'react-redux';

import BoardsIndexComponent from '../../components/boards';

export default connect(
  state => state
)(BoardsIndexComponent);
