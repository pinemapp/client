import React from 'react';
import { Route } from 'react-router-dom';

import AppLayout from './containers/app';
import BoardsIndex from './containers/boards';

const routes = [
  {
    path: '/boards',
    component: BoardsIndex
  }
];

const RouteConfig = () => (
  <AppLayout routes={routes} />
);

export default RouteConfig;
