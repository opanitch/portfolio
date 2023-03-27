import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Styles First
import './styles/app.css';

import App from './app';
import { ScrollToTopProvider } from 'Components/scroll-to-top-provider/scroll-to-top-provider.component';
import { Position } from 'Components/scroll-to-top-provider/scroll-to-top-provider.interfaces';

const browserHistory = createBrowserHistory();

ReactDOM.render(
  <StrictMode>
    <Router history={browserHistory}>
      <ScrollToTopProvider position={Position.RIGHT}>
        <App />
      </ScrollToTopProvider>
    </Router>
  </StrictMode>,
  document.getElementById('portfolio')
);
