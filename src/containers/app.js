import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { RouteWithSubRoutes } from '../commons/helper';
import Header from '../commons/header';

class AppLayout extends Component {
  render() {
    const { routes, session } = this.props;
    const { user } = session;

    return (
      <div className="main">
        <Header />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} user={user} {...route} />)}
      </div>
    )
  }
}

export default hot(module)(connect(state => state)(AppLayout));
