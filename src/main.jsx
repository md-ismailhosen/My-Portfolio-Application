import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import './icons/iconLibrary'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skill from './components/Skill/Skill';

import PrivateRoute from './Routes/PrivateRoute';
import PreviousJob from './components/PreviousJob/PreviousJob';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';

import Education from './components/Education/Education';
import Contact from './components/Contact/Contact.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      },
      {
        path: 'education',
        element: <PrivateRoute>
          <Education></Education>
        </PrivateRoute>
      },
      {
        path: 'skill',
        element: <PrivateRoute>
          <Skill></Skill>
        </PrivateRoute>
      },
      {
        path: 'previous_job',
        element: <PrivateRoute>
          <PreviousJob></PreviousJob>
        </PrivateRoute>
      },
      {
        path: "dashboard",
        element: <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      },
      {
        path: 'about',
        element: <PrivateRoute>
          <About></About>
        </PrivateRoute>
      },
      {
        path: 'contact',
        element: <PrivateRoute>
          <Contact></Contact>
        </PrivateRoute>
      }
      

    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
