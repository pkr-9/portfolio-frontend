import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AOS.init({
  duration: 800,
  offset: 100,
  once: true,
});
