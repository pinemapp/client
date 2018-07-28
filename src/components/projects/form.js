import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createForm, formShape } from 'rc-form';
import SelectBox from '../../commons/select-box';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export class ProjectForm extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    form: formShape,
    teams: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    project: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { ...props.project };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { form, onSubmit } = this.props;
    form.validateFields((error, value) => {
      if (!error) {
        onSubmit({
          ...value,
          id: this.props.project.id,
          team_id: this.state.team_id || null
        });
      }
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleTeamChange = (event) => {
    this.setState({ team_id: event.value.id });
  }

  clearState = () => {
    this.setState(this.props.project);
  }

  render() {
    const { isOpen, onToggle } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={onToggle} centered={true} fade={false} onClosed={this.clearState}>
        <ModalHeader toggle={onToggle}>
          {this.context.t('createProject')}
        </ModalHeader>
        <ModalBody>
          {this._renderForm()}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary-1" className="ripple" onClick={onToggle}>
            {this.context.t('btnCancel')}
          </Button>
          <Button color="primary" className="ripple" onClick={this.handleSubmit}>
            {this.context.t('btnCreate')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  _renderForm() {
    const { getFieldProps, getFieldError } = this.props.form;
    const requiredMessage = this.context.t('errorRequired');
    const maxMessage = this.context.t('errorMax', {max: 1000});
    const nameError = getFieldError('name');
    const descError = getFieldError('desc');

    return (
      <div className="new-project">
        <form className="form-custom" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{this.context.t('projectName')}</label>
            <input
              { ...getFieldProps('name', {
                initialValue: this.state.name,
                onChange: this.handleChange,
                rules: [{required: true, message: requiredMessage}]
              }) }
              type="text"
              name="name"
              value={this.state.name}
              placeholder={this.context.t('projectName')}
              className={`form-control ${nameError ? 'is-invalid' : ''}`} />
            {nameError ? (<p className="invalid-feedback">{nameError.join(', ')}</p>) : null }
          </div>
          <div className="form-group">
            <label htmlFor="name">{this.context.t('team')}</label>
            <SelectBox
              text="name"
              name="team_id"
              className="form-control"
              options={this.props.teams}
              select={this.props.teams.find((t) => this.props.project.team_id == t.id)}
              onChange={this.handleTeamChange} />
          </div>
          <div className="form-group">
            <label htmlFor="desc">{this.context.t('projectDesc')}</label>
            <textarea
              { ...getFieldProps('desc', {
                initialValue: this.state.desc,
                onChange: this.handleChange,
                rules: [{max: 1000, message: maxMessage}]
              }) }
              rows="7"
              name="desc"
              value={this.state.desc}
              placeholder={this.context.t('projectDesc')}
              className={`form-control ${descError ? 'is-invalid' : ''}`}>
            </textarea>
            {descError ? (<p className="invalid-feedback">{descError.join(', ')}</p>) : null }
          </div>
          <input type="submit" className="d-none" />
        </form>
      </div>
    );
  }
}

export default createForm()(ProjectForm);
