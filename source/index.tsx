import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

import HomePage from './pages/Home';

import { Header } from './components';

const hardcode = 'React with Webpack and Babel 526';
const title = '{{@ cms.home.title @}}';

const App = () => {
  return (
    <div className="w-100 mb-1">
      <Header />
      <p>{hardcode}</p>
      <p>{title}</p>
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('portfolio'));
