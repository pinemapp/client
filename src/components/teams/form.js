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
    team: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.txtName = React.createRef();
    this.state = { ...props.team };
  }

  focusTextbox = () => {
    if (this.txtName.current) {
      this.txtName.current.focus();
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { form, onSubmit } = this.props;
    form.validateFields((error, value) => {
      if (!error) {
        onSubmit(value);
      }
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  clearState = () => {
    this.setState(this.props.team);
  }

  render() {
    const { isOpen, onToggle, team } = this.props;
    const isNew = !team.id;

    return (
      <Modal
        fade={false}
        centered={true}
        isOpen={isOpen}
        toggle={onToggle}
        onClosed={this.clearState}
        onOpened={this.focusTextbox}>
        <ModalHeader toggle={onToggle}>
          {this.context.t(isNew ? 'createTeam' : 'updateTeam')}
        </ModalHeader>
        <ModalBody>
          {this._renderForm()}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary-1" className="ripple" onClick={onToggle}>
            {this.context.t('btnCancel')}
          </Button>
          <Button color="primary" className="ripple" onClick={this.handleSubmit}>
            {this.context.t(isNew ? 'btnCreate' : 'btnSave')}
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
      <form className="form-custom" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{this.context.t('teamName')}</label>
          <input
            { ...getFieldProps('name', {
              onChange: this.handleChange,
              initialValue: this.state.name,
              rules: [{required: true, message: requiredMessage}]
            }) }
            type="text"
            name="name"
            value={name}
            ref={this.txtName}
            autoComplete="off"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            placeholder={this.context.t('teamName')} />
          {nameError ? (<p className="invalid-feedback">{nameError.join(', ')}</p>) : null }
        </div>
        <div className="form-group">
          <label htmlFor="website">{this.context.t('teamWebsiteOptional')}</label>
          <input
            type="text"
            name="website"
            value={website}
            autoComplete="off"
            className="form-control"
            onChange={this.handleChange}
            placeholder={this.context.t('teamWebsite')} />
        </div>
        <div className="form-group">
          <label htmlFor="desc">{this.context.t('teamDescOptional')}</label>
          <textarea
            { ...getFieldProps('desc', {
              onChange: this.handleChange,
              initialValue: this.state.desc,
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
