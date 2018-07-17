import React from 'react';
import { Route } from 'react-router-dom';

import AppLayout from './containers/app';
import Home from './containers/home';
import Signin from './containers/signin';
import BoardsIndex from './containers/boards';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/boards',
    protected: true,
    component: BoardsIndex
  },
  {
    path: '/signin',
    component: Signin
  }
];

const RouteConfig = () => (
  <AppLayout routes={routes} />
);

export default RouteConfig;
