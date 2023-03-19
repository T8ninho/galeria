import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
//Inicio | script p/ desativar Right Click do mouse

window.addEventListener('contextmenu', (event) => event.preventDefault())

//Fim    | script p/ desativar Right Click do mouse

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
