import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Signin extends Component {
  static propTypes = {
    user: PropTypes.object,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    fetchSession: PropTypes.func.isRequired,
  };

  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.txtUsername = React.createRef();
    this.txtPassword = React.createRef();
  }

  signin = (event) => {
    event.preventDefault();
    this.props.fetchSession({
      username: this.txtUsername.current.value,
      password: this.txtPassword.current.value
    });
  }

  render() {
    const { user, loading } = this.props;

    if (user) {
      const { from } = this.props.location.state || { from: { pathname: '/' } };
      return (<Redirect to={from} />);
    }

    return (
      <div className="container">
        <div className="row">
          { this._renderSigninForm() }
        </div>
      </div>
    );
  }

  _renderSigninForm() {
    const { loading, error } = this.props;

    return (
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title text-center">{this.context.t('signin')}</h1>
            <form className="form" onSubmit={this.signin}>
              { error && this._renderErrorMessage() }
              <div className="form-group">
                <label htmlFor="username">{this.context.t('username')}</label>
                <input
                  type="text"
                  name="username"
                  ref={this.txtUsername}
                  className="form-control"
                  placeholder={this.context.t('username')} />
              </div>
              <div className="form-group">
                <label htmlFor="password">{this.context.t('password')}</label>
                <input
                  type="password"
                  name="password"
                  ref={this.txtPassword}
                  className="form-control"
                  defaultValue=""
                  placeholder={this.context.t('password')} />
              </div>
              <div className="form-group clearfix">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary float-right">
                  {this.context.t('signin')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  _renderErrorMessage() {
    return (
      <div className="alert alert-danger">
        {this.context.t('error_invalid_credentials')}
      </div>
    );
  }
}
