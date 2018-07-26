import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class TeamForm extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    form: formShape,
    isOpen: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      desc: '',
      website: ''
    };
  }

  handleCreate = (event) => {
    event.preventDefault();

    const { form, onCreate } = this.props;
    form.validateFields((error, value) => {
      if (!error) {
        onCreate(value);
      }
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { isOpen, onToggle } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={onToggle} centered={true} fade={false}>
        <ModalHeader toggle={onToggle}>
          {this.context.t('createTeam')}
        </ModalHeader>
        <ModalBody>
          {this._renderForm()}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary-1" className="ripple" onClick={onToggle}>
            {this.context.t('btnCancel')}
          </Button>
          <Button color="primary" className="ripple" onClick={this.handleCreate}>
            {this.context.t('btnCreate')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  _renderForm() {
    const { getFieldProps, getFieldError } = this.props.form;
    const { name, desc, website } = this.state;
    const requiredMessage = this.context.t('errorRequired');
    const maxMessage = this.context.t('errorMax', {max: 1000});
    const nameError = getFieldError('name');
    const descError = getFieldError('desc');

    return (
      <form className="form" onSubmit={this.handleCreate}>
        <div className="form-group">
          <label htmlFor="name">{this.context.t('teamName')}</label>
          <input
            { ...getFieldProps('name', {
              onChange: this.handleChange,
              rules: [{required: true, message: requiredMessage}]
            }) }
            type="text"
            name="name"
            value={name}
            autoComplete="false"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            placeholder={this.context.t('teamName')} />
          {nameError ? (<p className="invalid-feedback">{nameError.join(', ')}</p>) : null }
        </div>
        <div className="form-group">
          <label htmlFor="website">{this.context.t('teamWebsite')}</label>
          <input
            type="text"
            name="website"
            value={website}
            className="form-control"
            onChange={this.handleChange}
            placeholder={this.context.t('teamWebsite')} />
        </div>
        <div className="form-group">
          <label htmlFor="desc">{this.context.t('teamName')}</label>
          <textarea
            { ...getFieldProps('desc', {
              onChange: this.handleChange,
              rules: [
                {max: 1000, message: maxMessage}
              ]
            }) }
            rows="7"
            type="text"
            name="desc"
            value={desc}
            className={`form-control ${descError ? 'is-invalid' : ''}`}
            placeholder={this.context.t('teamDesc')}>
          </textarea>
          {descError ? (<p className="invalid-feedback">{descError.join(', ')}</p>) : null }
        </div>
        <input type="submit" className="d-none" />
      </form>
    );
  }
}

export default createForm()(TeamForm);
