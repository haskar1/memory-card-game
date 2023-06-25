import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import './fonts/Pokemon-Hollow.ttf';
import './fonts/Pokemon-Solid.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
