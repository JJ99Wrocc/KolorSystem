import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'swiper/css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.js/serviceWorkerRegistration';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// serviceWorkerRegistration.register();
reportWebVitals();
