import PropTypes from 'prop-types';
import React, { Component } from 'react';
import color from '../../utils/color';
import time from '../../utils/time';
import { Link } from 'react-router-dom';
import ProjectForm from '../../components/projects/form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Tooltip } from 'reactstrap';

export default class ProjectCard extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    teams: PropTypes.array.isRequired,
    project: PropTypes.object.isRequired,
    updateProject: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      isFormOpen: false,
      isTooltipOpen: false
    };
  }

  toggleMenu = (event) => {
    event.preventDefault();
    this.setState({ isMenuOpen: !this.state.isMenuOpen });
  }

  toggleTooltip = () => {
    this.setState({ isTooltipOpen: !this.state.isTooltipOpen });
  }

  toggleEditForm = (event) => {
    event.preventDefault();
    this.setState({ isFormOpen: !this.state.isFormOpen });
  }

  render() {
    const { isTooltipOpen, isMenuOpen, isFormOpen } = this.state;
    const { project, className, teams, updateProject, ...props } = this.props;
    const iconStyle = { backgroundColor: color.hexCode(project.name) };

    return (
      <div className={`card-wraper ${className ? className : ''}`} {...props}>
        <div className="card">
          <Link to={`/projects/${project.id}`} className="card-body">
            <div className="card-head">
              <span className="card-head__icon" style={iconStyle}>{project.name[0]}</span>
              <h5 className="card-head__title">{project.name}</h5>
            </div>
            <p className="card-desc">{project.desc}</p>
          </Link>
          <div className="card-foot">
            <label className="card-foot__created">
              {time.formatDate(project.created_at)}
            </label>
            <Dropdown tag="span" isOpen={isMenuOpen} toggle={this.toggleMenu} className="card-foot__menu">
              <DropdownToggle tag="span">
                <span id={`project-${project.id}-menu`}>
                  <FontAwesomeIcon icon="cog" />
                </span>
                <Tooltip
                  delay={0}
                  placement="top"
                  isOpen={isTooltipOpen}
                  toggle={this.toggleTooltip}
                  target={`project-${project.id}-menu`}>
                  {this.context.t('projectMenu')}
                </Tooltip>
              </DropdownToggle>
              <DropdownMenu right={true}>
                <DropdownItem tag="label" className="text-center" disabled={true}>{this.context.t('menu')}</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#" onClick={this.toggleEditForm}>{this.context.t('edit')}</DropdownItem>
                <DropdownItem href="#">{this.context.t('delete')}</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <ProjectForm
          teams={teams}
          project={project}
          isOpen={isFormOpen}
          onSubmit={updateProject}
          onToggle={this.toggleEditForm} />
      </div>
    );
  }
}
