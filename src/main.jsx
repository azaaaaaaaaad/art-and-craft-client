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
        loader: () => fetch(`http://localhost:5000/crafts`)
      },
      {
        path: '/artAndCraft',
        element: <AllArtCraft></AllArtCraft>,
        loader: ()=> fetch(`http://localhost:5000/addCraftItems`)
      },
      // {
      //   path: '/addCraft',
      //   element:
      //     <PrivateRoute>
      //       <AddCraftItems></AddCraftItems>
      //     </PrivateRoute>,
      // },
      {
        path: '/addCraftItems',
        element: <PrivateRoute>
          <AddAllCraftItems></AddAllCraftItems>
        </PrivateRoute>
      },
      {
        path: '/myArtAndCraft',
        element: <MyArtCraft></MyArtCraft>,
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
        loader: ({ params }) => fetch(`http://localhost:5000/crafts/${params.id}`)
      },
      {
        path: '/viewDetailsTWO/:id',
        element:
          <PrivateRoute>
            <ViewDetailsTWO></ViewDetailsTWO>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/addCraftItems/${params.id}`)
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
