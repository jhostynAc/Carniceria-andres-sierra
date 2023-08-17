import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import Principal from './componentes/inicio/Inicio';
import Pedidos from "./componentes/pedidos/Pedidos";
import Contacto from './componentes/contactenos/contacto';
import Conocenos from './componentes/conocenos/conocenos';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Principal/>
  },
  {
    path:'/pedido',
    element:<Pedidos/>
  },
  {
    path:'/contacto',
    element:<Contacto/>
  },
  {
    path:'/conocenos',
    element:<Conocenos/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
