import { connect } from 'react-redux';
import Signup from '../components/signup';
import { createUser } from '../actions/user';
import userSelector from '../selectors/user';

export default connect(userSelector, { createUser })(Signup);
