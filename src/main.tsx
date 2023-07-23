import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import Login from './pages/login.tsx';
import Register from './pages/register.tsx';
import { ToastContainer } from 'react-toastify';
import AppwriteProvider from './components/AppwriteProvider.tsx';
import UserProvider from './components/UserProvider.tsx';
import Me from './pages/me.tsx';
import Logout from './pages/logout.tsx';
import TeamView from './pages/teamView.tsx';
import UserLoginCheck from './components/UserLoginCheck.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'register',
        element: <Register />,
    },
    {
      path: 'me',
      element: <UserLoginCheck> <Me /> </UserLoginCheck>,
    },
    {
        path: 'logout',
        element: <Logout />,
    },
    {
        path: 'teamView',
        element: <UserLoginCheck> <TeamView /> </UserLoginCheck>,
    }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppwriteProvider>
            <UserProvider>
                <RouterProvider router={router} />
                <ToastContainer />
            </UserProvider>
        </AppwriteProvider>
    </React.StrictMode>
);
