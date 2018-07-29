import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Tooltip } from 'reactstrap';
import headerSelector from '../../selectors/header';
import { createTeam, fetchTeams } from '../../actions/teams';
import { createProject } from '../../actions/projects';
import { revokeSession } from '../../actions/session';
import TeamForm from '../../components/teams/form';
import ProjectForm from '../../components/projects/form';
import Project from '../../models/project';
import Team from '../../models/team';
import Search from './search';
import TextIcon from '../text-icon';

const NewTeam = new Team();
const NewProject = new Project();

export class Header extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    team: PropTypes.object.isRequired,
    createTeam: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    revokeSession: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isTooltipOpen: false,
      isProjectOpen: false,
      isTeamFormOpen: false,
      isProjectFormOpen: false
    };
  }

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleProjectDropdown = (event) => {
    event.preventDefault();
    this.setState({ isProjectOpen: !this.state.isProjectOpen });
  }

  signout = (event) => {
    event.preventDefault();
    this.props.revokeSession();
  }

  toggleTeamForm = (event) => {
    event.preventDefault();
    this.setState({ isTeamFormOpen: !this.state.isTeamFormOpen });
  }

  toggleProjectForm = (event) => {
    event.preventDefault();

    if (this.props.team.data.length === 0) {
      this.props.fetchTeams();
    }
    this.setState({ isProjectFormOpen: !this.state.isProjectFormOpen });
  }

  toggleTooltip = () => {
    this.setState({ isTooltipOpen: !this.state.isTooltipOpen });
  }

  createTeam = (team) => {
    this.props.createTeam(team);
  }

  createProject = (project) => {
    this.props.createProject(project);
  }

  render() {
    const { user, team } = this.props;
    const { isOpen, isProjectOpen, isTeamFormOpen, isProjectFormOpen } = this.state;

    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">{ this.context.t('appName') }</Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            {this._renderLeftMenu()}
            <Search />
            {this._renderRightMenu()}
          </div>
        </div>
        <TeamForm
          team={NewTeam}
          isOpen={isTeamFormOpen}
          onSubmit={this.createTeam}
          onToggle={this.toggleTeamForm} />
        <ProjectForm
          teams={team.data}
          project={NewProject}
          isOpen={isProjectFormOpen}
          onSubmit={this.createProject}
          onToggle={this.toggleProjectForm} />
      </header>
    );
  }

  _renderLeftMenu() {
    if (!this.props.user) {
      return (<ul className="navbar-nav mr-auto"></ul>);
    }

    return (
      <ul className="navbar-nav mr-auto">
        <Dropdown
          isOpen={this.state.isProjectOpen}
          toggle={this.toggleProjectDropdown}
          className="new-project-link nav-item">
          <DropdownToggle tag="a" href="#"
            className="nav-link btn btn-secondary-1 ripple">
            <TextIcon icon="plus" text={this.context.t('btnCreate')} />
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="#" onClick={this.toggleTeamForm}>
              <TextIcon icon="users" text={this.context.t('team')} />
            </DropdownItem>
            <DropdownItem href="#" onClick={this.toggleProjectForm}>
              <TextIcon icon="archive" text={this.context.t('project')} />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ul>
    );
  }

  _renderRightMenu() {
    const { user } = this.props;

    if (!user) {
      return (
        <ul className="navbar-nav ml-2">
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              { this.context.t('signin') }
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              { this.context.t('signup') }
            </Link>
          </li>
        </ul>
      );
    }

    return (
      <ul className="navbar-nav ml-2">
        <li className="nav-item">
          <a id="bell-icon" className="bell nav-link" href="#">
            <FontAwesomeIcon icon={['far', 'bell']} size="2x" />
          </a>
          <Tooltip
            delay={0}
            placement="bottom"
            target="bell-icon"
            toggle={this.toggleTooltip}
            isOpen={this.state.isTooltipOpen}>
            {this.context.t('notification')}
          </Tooltip>
        </li>
        <Dropdown className="nav-item" toggle={this.toggleDropdown} isOpen={this.state.isOpen}>
          <DropdownToggle className="nav-link avatar" tag="a" href="#">
            <img className="img-avatar" src="http://via.placeholder.com/100x100" />
          </DropdownToggle>
          <DropdownMenu right={true}>
            <DropdownItem className="text-center" tag="label" disabled={true}>{user.name}</DropdownItem>
            <DropdownItem divider></DropdownItem>
            <DropdownItem href="#">
              <TextIcon icon="user-alt" text={this.context.t('myAccount')} />
            </DropdownItem>
            <DropdownItem href="#">
              <TextIcon icon="cog" text={this.context.t('settings')} />
            </DropdownItem>
            <DropdownItem divider></DropdownItem>
            <DropdownItem href="#" onClick={this.signout}>
              <TextIcon icon="sign-out-alt" text={this.context.t('signout')} />
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ul>
    );
  }
}

const actionCreators = (dispatch) => {
  return bindActionCreators({
    createTeam,
    fetchTeams,
    createProject,
    revokeSession
  }, dispatch);
}

export default connect(headerSelector, actionCreators)(Header);
