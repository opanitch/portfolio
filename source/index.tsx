import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

import HomePage from './pages/Home';

const title = 'React with Webpack and Babel 5';

const App = () => {
  return (
    <div className="w-100 mb-1">
      {title}
      <HomePage />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('portfolio'));
