import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Search extends Component {
  static contextTypes = {
    t: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { isFocus: false };
  }

  toggleFocus = (event) => {
    this.setState({ isFocus: !this.state.isFocus });
  }

  render() {
    return (
      <form className={`form-inline my-2 my-lg-0 search ${this.state.isFocus ? 'active' : ''}`}>
        <input
          type="search"
          className="form-control"
          placeholder={this.context.t('search')}
          onFocus={this.toggleFocus}
          onBlur={this.toggleFocus} />
        <button className="btn my-2 my-sm-0" type="submit">
          <FontAwesomeIcon icon="search" />
        </button>
      </form>
    );
  }
}
