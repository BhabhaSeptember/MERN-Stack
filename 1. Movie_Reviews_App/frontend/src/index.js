import React from 'react'; //library for creating views
import ReactDOM from 'react-dom/client'; //library used to render UI in browser
import './index.css';
import App from './App';

//allows for different routes to display different components
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
);

