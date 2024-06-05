import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';
import Home from './Home';
import Layout from './components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecurityToken from './components/SecurityToken';
import Transaction from './components/Transaction';

const domNode = document.getElementById('root');
const root = createRoot(domNode);
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/token/create',
    element: <SecurityToken />,
  },
  {
    path: '/transaction/create',
    element: <Transaction />,
  },
]);
root.render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

reportWebVitals(sendToVercelAnalytics);
