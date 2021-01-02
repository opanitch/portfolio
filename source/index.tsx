import React from 'react';
import ReactDOM from 'react-dom';

import './styles/app.css';

import HomePage from './pages/Home';

import { Footer, Header } from './components';

const App = () => {
  return (
    <div className="mb-1 w-100">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('portfolio'));
