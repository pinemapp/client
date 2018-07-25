import React from 'react';
import { Route } from 'react-router-dom';

import AppLayout from './containers/app';
import Signin from './containers/signin';
import Signup from './containers/signup';
import ProjectsIndex from './containers/projects';

const routes = [
  {
    path: '/',
    exact: true,
    protected: true,
    component: ProjectsIndex
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/signup',
    component: Signup
  }
];

const RouteConfig = () => (
  <AppLayout routes={routes} />
);

export default RouteConfig;
