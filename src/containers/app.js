import React, { Component } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { Route, Redirect } from 'react-router-dom';

import Header from '../commons/header';
import BoardsIndex from './boards';
import sessionSelector from '../selectors/session';

const PrivateRouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => route.token ? (
        <route.component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }} />
      )}
    />
  );
}

const RouteWithSubRoutes = (route) => {
  if (route.protected) {
    return (
      <PrivateRouteWithSubRoutes {...route} />
    );
  } else {
    return (
      <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    );
  }
};

class AppLayout extends Component {
  render() {
    const { routes, session } = this.props;
    const { token } = session;

    return (
      <div className="main">
        <Header />
        {routes.map((route, i) => <RouteWithSubRoutes key={i} token={token} {...route} />)}
      </div>
    )
  }
}

export default hot(module)(connect(state => state)(AppLayout));
