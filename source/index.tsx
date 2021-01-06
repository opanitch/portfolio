import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Styles First
import './styles/app.css';

import { SiteFooter, SiteHeader } from './components';
import routeConfig from './route-config';

const renderAnchor = document.getElementById('portfolio');

renderAnchor &&
  ReactDOM.render(
    <Router>
      <SiteHeader />
      <Switch>
        {routeConfig.map((route, index) => {
          const Component = route.component;
          const path = route.path;

          return (
            <Route
              key={index}
              path={path}
              exact={true}
              render={(props) => <Component {...props} />}
            />
          );
        })}
      </Switch>
      <SiteFooter />
    </Router>,
    renderAnchor
  );
