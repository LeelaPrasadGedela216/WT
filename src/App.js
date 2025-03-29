import React from 'react'
import LoginPage from './pages/LoginPage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from './components/EmailSignIn';
import SignUp from './components/SignUp';
import Collections from './pages/Collections';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Placeorder from './pages/Placeorder';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import appStore from './utils/appStore';
import Orders from './pages/Orders';
const App = () => {
  const appRouter=createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/email",
       element:<SignIn/>
    },
    {
      path:"/register",
      element:<SignUp/>
    },
    {
      path:"/collections",
      element:<Collections/>
    },
    {
      path:"/home",
      element:<Home/>
    },
    {
      path:"/contact",
      element:<Contact/>

    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/placeorder",
      element:<Placeorder/>
    },
    {
      path:"/cart",
      element:<Cart/>
    },
    {
      path:"/product/:_id",
      element:<Product/>
    },
    {
      path:"/orders",
      element:<Orders/>
    }
  ])
 
    return (
     <Provider store={appStore}>
       <RouterProvider router={appRouter} />
       <ToastContainer />
     </Provider>
    );
  
}

export default App
