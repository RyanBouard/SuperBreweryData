import React from "react";
import ReactDOM from "react-dom";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import ReactDOMClient from 'react-dom/client';
import '../style/Index.css'
import 'react-router-dom'
import { routes } from './Routes'

const router = createBrowserRouter(routes)

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);
