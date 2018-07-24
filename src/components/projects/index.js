import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ProjectCard from './card';
import PageLoader from '../../commons/page-loader';

export class ProjectsIndex extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    projects: PropTypes.array.isRequired,
    fetchProjects: PropTypes.func.isRequired
  };

  componentDidMount() {
    if (!this.props.loading) {
      this.props.fetchProjects();
    }
  }

  render() {
    const { loading } = this.props;

    if (loading) {
      return <PageLoader loading={loading} />
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card-container">
              {this._renderProjects()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _renderProjects() {
    const { projects } = this.props;
    return projects.map(this._renderProject);
  }

  _renderProject(project, index) {
    return (
      <ProjectCard project={project} key={index} />
    );
  }
}

export default hot(module)(ProjectsIndex);
