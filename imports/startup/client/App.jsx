import { Meteor } from 'meteor/meteor';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createHistory, useBasename } from 'history';

import routes from './routes';
import MainLayout from 'ui/layouts/MainLayout';

const rootRoute = {
  component: MainLayout,
  childRoutes: routes
};

const App = () => (
    <Router history={browserHistory} routes={rootRoute} />
);

Meteor.startup(() => {
  ReactDOM.render(
    <Router history={browserHistory} routes={rootRoute} />,
    document.getElementById('app')
  );
});
