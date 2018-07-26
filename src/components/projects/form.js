import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ProjectForm extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
  };

  handleCreate = (event) => {
    event.preventDefault();
  }

  render() {
    const { isOpen, onToggle } = this.props;

    return (
      <Modal isOpen={isOpen} toggle={onToggle} centered={true} fade={false}>
        <ModalHeader toggle={onToggle}>
          {this.context.t('createProject')}
        </ModalHeader>
        <ModalBody>
          {this._renderForm()}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={onToggle}>
            {this.context.t('btnCancel')}
          </Button>
          <Button color="primary" onClick={this.handleCreate}>
            {this.context.t('btnCreate')}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }

  _renderForm() {
    return (
      <div className="new-project">
        <form className="form">
          <div className="form-group">
            <label htmlFor="name">{this.context.t('projectName')}</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder={this.context.t('projectName')} />
          </div>
          <div className="form-group">
            <label htmlFor="desc">{this.context.t('projectDesc')}</label>
            <textarea
              rows="7"
              name="desc"
              className="form-control"
              placeholder={this.context.t('projectDesc')}>
            </textarea>
          </div>
          <input type="submit" className="d-none" />
        </form>
      </div>
    );
  }
}
