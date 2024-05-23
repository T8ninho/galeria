import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Desativa Right Click do mouse.
window.addEventListener('contextmenu', (event) => event.preventDefault());

//Bloqueia baixar ação de arrastar imagens para download.
window.addEventListener('dragstart', (event) => event.preventDefault());

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
