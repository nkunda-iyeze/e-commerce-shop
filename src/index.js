import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// ProductProvider
import ProductProvider from './contexts/ProductContext';
// SideBarProvider
import SidebarProvider from './contexts/SidebarContext';
// CardProvider
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
 <CartProvider>
 <ProductProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
 </CartProvider>
  </SidebarProvider>
  
);
