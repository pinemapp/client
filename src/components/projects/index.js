import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import ProjectCard from './card';
import PageLoader from '../../commons/page-loader';

export class ProjectsIndex extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    teams: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    updateProject: PropTypes.func.isRequired,
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

  _renderProject = (project) => {
    const { teams, updateProject } = this.props;
    return (
      <ProjectCard
        teams={teams}
        key={project.id}
        project={project}
        updateProject={updateProject} />
    );
  }
}

export default hot(module)(ProjectsIndex);
