import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import headerSelector from '../selectors/header';
import * as headerActions from '../actions/header';

export class Header extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  static propTypes = {
    inputClass: PropTypes.string.isRequired,
    isSearchFocus: PropTypes.bool.isRequired,
    toggleSearchFocus: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { isDropdownOpen: false };
  }

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  }

  render() {
    const { isDropdownOpen } = this.state;
    const { inputClass, toggleSearchFocus } = this.props;

    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
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
            <ul className="navbar-nav ml-2">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle avatar" href="#" onClick={this.toggleDropdown}>
                  <img className="img-avatar" src="http://via.placeholder.com/100x100"  />
                </a>
                <div className={`dropdown-menu dropdown-menu-right ${isDropdownOpen ? 'show' : ''}`}>
                  <a className="dropdown-item" href="#">My Account</a>
                  <a className="dropdown-item" href="#">Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Sign Out</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

const actionCreators = (dispatch) => {
  return bindActionCreators(headerActions, dispatch);
}

export default connect(headerSelector, actionCreators)(Header);
