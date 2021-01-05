import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Styles First
import './styles/app.css';

import { RouteWithSubRoutes, SiteFooter, SiteHeader } from './components';
import HomePage from './pages/Home';

import routeConfig from './route-config';

const renderAnchor = document.getElementById('portfolio');

renderAnchor &&
  ReactDOM.render(
    <Router>
      <SiteHeader />
      <HomePage />
      <Switch>
        {routeConfig.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
      <SiteFooter />
    </Router>,
    renderAnchor
  );
