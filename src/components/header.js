import { Link } from 'react-router-dom';
import React, { Component } from 'react';

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link to="/" className="navbar-brand">Pinem</Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/boards" className="nav-link">Boards</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}
