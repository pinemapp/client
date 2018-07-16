import React from 'react';
import { Route } from 'react-router-dom';

import AppLayout from './containers/app';
import Home from './containers/home';
import BoardsIndex from './containers/boards';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/boards',
    component: BoardsIndex
  }
];

const RouteConfig = () => (
  <AppLayout routes={routes} />
);

export default RouteConfig;
