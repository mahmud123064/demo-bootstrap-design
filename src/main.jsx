
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
// import { router } from './Components/Router/router';
import React from 'react';
import { router } from './Components/Router/Router';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
