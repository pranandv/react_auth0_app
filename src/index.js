import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
  domain='dev-1tsupmp3.us.auth0.com'
  clientId='Hwaj7NbwBWUsbur8FJcpj0RlUnKrJEYJ'
  redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
