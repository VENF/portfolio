import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
import App from './App';
import './index.scss';

gsap.registerPlugin(CSSPlugin)
ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);