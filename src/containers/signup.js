import { connect } from 'react-redux';
import Signup from '../components/signup';
import { createUser, clearError } from '../actions/user';
import userSelector from '../selectors/user';

export default connect(userSelector, { createUser, clearError })(Signup);
