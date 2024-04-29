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
import AuthProvider from './components/AuthProvider';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';
import ViewDetails from './components/ViewDetails';
import AddAllCraftItems from './components/AddAllCraftItems';
import ViewDetailsTWO from './components/ViewDetailsTWO';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`https://art-server-nine.vercel.app/crafts`)
      },
      {
        path: '/artAndCraft',
        element: <AllArtCraft></AllArtCraft>,
        loader: () => fetch(`https://art-server-nine.vercel.app/addCraftItems`)
      },
      // {
      //   path: '/addCraft',
      //   element:
      //     <PrivateRoute>
      //       <AddCraftItems></AddCraftItems>
      //     </PrivateRoute>,
      // },
      //jrazad10@gmail.com
      //azad
      {
        path: '/addCraftItems',
        element: <PrivateRoute>
          <AddAllCraftItems></AddAllCraftItems>
        </PrivateRoute>
      },
      {
        path: '/myArtAndCraft',
        element: <PrivateRoute>
          <MyArtCraft></MyArtCraft>
        </PrivateRoute>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/viewDetails/:id',
        element:
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-server-nine.vercel.app/crafts/${params.id}`)
      },
      {
        path: '/viewDetailsTWO/:id',
        element:
          <PrivateRoute>
            <ViewDetailsTWO></ViewDetailsTWO>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`https://art-server-nine.vercel.app/addCraftItems/${params.id}`)
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
