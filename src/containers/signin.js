import { connect } from 'react-redux';

import Signin from '../components/signin';
import { fetchSession } from '../actions/session';
import sessionSelector from '../selectors/session';

export default connect(sessionSelector, { fetchSession })(Signin);
