import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

/* Auth0 details */
root.render(
  
    <Auth0Provider 
    domain="capstone1218.eu.auth0.com"
    clientId="AqEdAWeHfq0AGSDj1j2LHXdxaGpe9Qe3"
    redirect_uri={ window.location.origin}>
  
    
       <App />
    </Auth0Provider>
   
  
  
);
