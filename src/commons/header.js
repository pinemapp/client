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
    this.state = { isOpen: false };
  }

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  signout = (event) => {
    event.preventDefault();
    this.props.revokeSession();
  }

  render() {
    const { isOpen } = this.state;
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
              <li className="nav-item active">
                <Link to="/boards" className="nav-link">{ this.context.t('boards') }</Link>
              </li>
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
