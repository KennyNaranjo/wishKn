import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId= process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams= {{
          redirect_uri: window.location.origin,}}
        >
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
    
);

reportWebVitals();
