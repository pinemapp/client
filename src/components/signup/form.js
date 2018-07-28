import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';
import { every as _every, isEmpty as _isEmpty } from 'lodash';

class SignupForm extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    form: formShape,
    loading: PropTypes.bool,
    errors: PropTypes.object,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { form, onSubmit } = this.props;
    form.validateFields((error, value) => {
      if (!error) {
        const { confirmPassword, ...payload } = value;
        onSubmit(payload);
      }
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.onChange(name);
  }

  render() {
    const errors = this._getErrors();
    const { getFieldProps } = this.props.form;
    const requiredMessage = this.context.t('errorRequired');
    const minMessage = this.context.t('errorMin', {min: 8});
    const emailMessage = this.context.t('errorEmail');

    return (
      <form className="form-custom" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{this.context.t('userName')}</label>
          <input
            { ...getFieldProps('name', {
              onChange: this.handleChange,
              rules: [{required: true, message: requiredMessage}]
            }) }
            type="text"
            name="name"
            autoComplete="false"
            value={this.state.name}
            placeholder={this.context.t('userName')}
            className={`form-control ${errors['name'] ? 'is-invalid' : ''}`} />
          {errors['name'] ? (<p className="invalid-feedback">{errors['name'].join(', ')}</p>) : null }
        </div>
        <div className="form-group">
          <label htmlFor="email">{this.context.t('userEmail')}</label>
          <input
            { ...getFieldProps('email', {
              onChange: this.handleChange,
              rules: [
                {required: true, message: requiredMessage},
                {type: 'email', message: emailMessage}
              ]
            }) }
            type="email"
            name="email"
            autoComplete="false"
            value={this.state.email}
            placeholder={this.context.t('userEmail')}
            className={`form-control ${errors['email'] ? 'is-invalid' : ''}`} />
          {errors['email'] ? (<p className="invalid-feedback">{errors['email'].join(', ')}</p>) : null }
        </div>
        <div className="form-group">
          <label htmlFor="password">{this.context.t('userPassword')}</label>
          <input
            { ...getFieldProps('password', {
              onChange: this.handleChange,
              rules: [
                {required: true, message: requiredMessage},
                {min: 8, message: minMessage}
              ]
            }) }
            type="password"
            name="password"
            value={this.state.password}
            placeholder={this.context.t('userPassword')}
            className={`form-control ${errors['password'] ? 'is-invalid' : ''}`} />
          {errors['password'] ? (<p className="invalid-feedback">{errors['password'].join(', ')}</p>) : null }
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">{this.context.t('userConfirmPassword')}</label>
          <input
            { ...getFieldProps('confirmPassword', {
              onChange: this.handleChange,
              rules: [{required: true, message: requiredMessage}]
            }) }
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            placeholder={this.context.t('userConfirmPassword')}
            className={`form-control ${errors['confirmPassword'] ? 'is-invalid' : ''}`} />
          {errors['confirmPassword'] ? (<p className="invalid-feedback">{errors['confirmPassword'].join(', ')}</p>) : null }
        </div>
        <div className="form-group clearfix">
          <button className="btn btn-primary float-right" disabled={!this._isValid(errors)}>{this.context.t('signup')}</button>
        </div>
      </form>
    );
  }

  _getErrors() {
    const { errors } = this.props;
    const { getFieldError } = this.props.form;
    let confirmPasswordErrors = getFieldError('confirmPassword');
    const { password, confirmPassword } = this.state;

    if (!confirmPasswordErrors && password !== confirmPassword) {
      confirmPasswordErrors = [this.context.t('errorConfirm')];
    }

    return {
      name: getFieldError('name') || errors.name,
      email: getFieldError('email') || errors.email,
      password: getFieldError('password') || errors.password,
      confirmPassword: confirmPasswordErrors
    };
  }

  _isValid(errors) {
    return _every(errors, (value) => _isEmpty(value));
  }
}

export default createForm()(SignupForm);
