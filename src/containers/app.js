import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';

import HeaderComponent from '../components/header';
import BoardsIndex from './boards';

const RouteWithSubRoutes = (route) => (
  <Route
    exact
    path={route.path}
    component={route.component}
  />
);

class AppLayout extends Component {
  render() {
    const { routes } = this.props;

    return (
      <div className="main">
        <HeaderComponent />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}

export default hot(module)(connect(state => state)(AppLayout));
