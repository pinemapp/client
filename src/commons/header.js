import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import headerSelector from '../selectors/header';
import { revokeSession } from '../actions/session';
import * as headerActions from '../actions/header';

export class Header extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    inputClass: PropTypes.string.isRequired,
    isSearchFocus: PropTypes.bool.isRequired,

    revokeSession: PropTypes.func.isRequired,
    toggleSearchFocus: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isProjectOpen: false
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

  render() {
    const { isOpen, isProjectOpen } = this.state;
    const { user, inputClass, toggleSearchFocus } = this.props;

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
            <ul className="navbar-nav mr-auto">
              <Dropdown className="new-project-link nav-item" toggle={this.toggleProjectDropdown} isOpen={isProjectOpen}>
                <DropdownToggle tag="a" className="nav-link btn btn-primary" href="#">
                  <FontAwesomeIcon icon="plus" />
                  { this.context.t('btnCreate') }
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="#">
                    <span><FontAwesomeIcon icon="users" /></span>
                    {this.context.t('team')}
                  </DropdownItem>
                  <DropdownItem href="#">
                    <span><FontAwesomeIcon icon="archive" /></span>
                    {this.context.t('project')}
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ul>
            <form className={`form-inline my-2 my-lg-0 search ${inputClass}`}>
              <input
                type="search"
                className="form-control"
                placeholder={this.context.t('search')}
                onFocus={() => { toggleSearchFocus(true) }}
                onBlur={() => { toggleSearchFocus(false) }} />
              <button className="btn my-2 my-sm-0" type="submit"><FontAwesomeIcon icon="search" /></button>
            </form>

            { user ? (
              <ul className="navbar-nav ml-2">
                <li className="nav-item">
                  <a className="bell nav-link" href="#">
                    <FontAwesomeIcon icon={['far', 'bell']} size="2x" />
                  </a>
                </li>
                <Dropdown className="nav-item" toggle={this.toggleDropdown} isOpen={isOpen}>
                  <DropdownToggle className="nav-link avatar" tag="a" href="#">
                    <img className="img-avatar" src="http://via.placeholder.com/100x100" />
                  </DropdownToggle>
                  <DropdownMenu right={true}>
                    <DropdownItem href="#">My Account</DropdownItem>
                    <DropdownItem href="#">Settings</DropdownItem>
                    <DropdownItem divider></DropdownItem>
                    <DropdownItem href="#" onClick={this.signout}>{ this.context.t('signout') }</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </ul>
            ) : (
              <ul className="navbar-nav ml-2">
                <li className="nav-item">
                  <Link to="/signin" className="nav-link">{ this.context.t('signin') }</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">{ this.context.t('signup') }</Link>
                </li>
              </ul>
            ) }
          </div>
        </div>
      </header>
    );
  }
}

const actionCreators = (dispatch) => {
  return bindActionCreators({ revokeSession, ...headerActions }, dispatch);
}

export default connect(headerSelector, actionCreators)(Header);
