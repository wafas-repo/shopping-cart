import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './pages/Layout.jsx'
import Home from './components/Home/Home.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import ProductProvider from './contexts/ProductContext.jsx'
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/Cart" element={<Cart />} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>,
)
