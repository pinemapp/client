import React, { Component } from 'react';

export default class ProjectForm extends Component {
  render() {
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
              name="desc"
              className="form-control"
              placeholder={this.context.t('projectDesc')}>
            </textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">{this.context.t('btnCreate')}</button>
          </div>
        </form>
      </div>
    );
  }
}
