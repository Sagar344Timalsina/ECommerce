import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './components/context/Auth';
import { SearchProvider } from './components/context/Search';
import { CartProvider } from './components/context/Cart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthProvider>
<SearchProvider>
<CartProvider>
<BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
</CartProvider>
</SearchProvider>
</AuthProvider>
);
