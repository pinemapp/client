import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Route } from 'react-router-dom';

import Header from '../commons/header';
import BoardsIndex from './boards';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
);

class AppLayout extends Component {
  render() {
    const { routes } = this.props;

    return (
      <div className="main">
        <Header />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}

export default hot(module)(connect(state => state)(AppLayout));
