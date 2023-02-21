import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalStyle from './styles/global';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Router>
    <App />
    <GlobalStyle />
  </Router>,
);
