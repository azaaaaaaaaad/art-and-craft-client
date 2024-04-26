import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Error from './components/Error';
import AllArtCraft from './components/AllArtCraft';
import AddCraftItems from './components/AddCraftItems';
import MyArtCraft from './components/MyArtCraft';
import SignUp from './components/SignUp';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:5000/crafts`)
      },
      {
        path: '/artAndCraft',
        element: <AllArtCraft></AllArtCraft>,
      },
      {
        path: '/addCraft',
        element: <AddCraftItems></AddCraftItems>,
      },
      {
        path: '/myArtAndCraft',
        element: <MyArtCraft></MyArtCraft>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
