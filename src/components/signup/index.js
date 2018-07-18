import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SignupForm from './form';
import { hot } from 'react-hot-loader';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  }

  static propTypes = {
    user: PropTypes.object,
    errors: PropTypes.object,
    clearError: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.txtName = React.createRef();
    this.txtEmail = React.createRef();
    this.txtPassword = React.createRef();
    this.txtConfirmPassword = React.createRef();
  }

  signup = (payload) => {
    this.props.createUser({
      ...payload,
      redirect_url: 'http://localhost:4000'
    });
  }

  handleChange = (name) => {
    this.props.clearError(name);
  }

  render() {
    if (this.props.user) {
      return (<Redirect to="/" />);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {this._renderSignupForm()}
          </div>
        </div>
      </div>
    );
  }

  _renderSignupForm() {
    const { loading, errors } = this.props;
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">{this.context.t('signup')}</h1>
          <SignupForm
            errors={errors}
            loading={loading}
            onSubmit={this.signup}
            onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

export default hot(module)(Signup);
