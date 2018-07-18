import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => route.user ? (
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

export const RouteWithSubRoutes = (route) => {
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
