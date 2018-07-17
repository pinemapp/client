import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SignupForm from './form';

export default class Signup extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  }

  static propTypes = {
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

  render() {
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
    return (
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center">{this.context.t('signup')}</h1>
          <SignupForm onSubmit={this.signup} />
        </div>
      </div>
    );
  }
}
