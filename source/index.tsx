import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

import HomePage from './pages/Home';

import { SiteFooter, SiteHeader } from './components';

const renderAnchor = document.getElementById('portfolio');

renderAnchor &&
  ReactDOM.render(
    <div>
      <SiteHeader />
      <HomePage />
      <SiteFooter />
    </div>,
    renderAnchor
  );
