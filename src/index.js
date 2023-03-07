import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ('dev-pu8wyk-g.us.auth0.com');npm install
// ('7vHgXJ01aWGyMVLWdZUwQSUapigdjfKu');

root.render(
  <Auth0Provider
    domain='dev-86gu451lsonsgeuc.us.auth0.com'
    clientId='vqprHobIbEDL4EM6VIm10t4nLrBJnMBh'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
