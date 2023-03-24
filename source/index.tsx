import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Styles First
import './styles/app.css';

import App from './app';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <StrictMode>
    <Router history={browserHistory}>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById('portfolio')
);
