import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import { store } from './app/store'
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
// import Cart from './components/Cart.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Payment from './components/Payment.jsx';
import WishList from './components/WishList.jsx';
import ShimmerCard from './components/ShimmerCard.jsx';

const Cart = lazy(() => import ("./components/Cart.jsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/cart",
        element: <Suspense fallback={<ShimmerCard/>}> <Cart/></Suspense>
      },
      {
        path: "/product/:prodId",
        element: <ProductDetails/>
      },
      {
        path: "/wishlist",
        element: <WishList/>
      },
    ],
  },
  {
    path: "/payment",
    element: <Payment/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  
)

// <React.StrictMode>
//{/* </React.StrictMode>, */}
