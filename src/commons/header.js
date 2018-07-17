import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
    this.state = { isOpen: false };
  }

  toggleDropdown = (event) => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
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
              <Dropdown className="nav-item" toggle={this.toggleDropdown} isOpen={isOpen}>
                <DropdownToggle className="nav-link avatar" tag="a" href="#">
                  <img className="img-avatar" src="http://via.placeholder.com/100x100" />
                </DropdownToggle>
                <DropdownMenu right={true}>
                  <DropdownItem href="#">My Account</DropdownItem>
                  <DropdownItem href="#">Settings</DropdownItem>
                  <DropdownItem divider></DropdownItem>
                  <DropdownItem href="#">Sign Out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
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
