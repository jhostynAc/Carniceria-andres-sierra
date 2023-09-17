import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Principal from './componentes/inicio/Inicio';
import Contacto from './componentes/contactenos/contacto';
import Conocenos from './componentes/conocenos/conocenos';
import Productos from './componentes/productos/productos';
import Ventas from './componentes/admin/producto';
import Proveedor from './componentes/admin/Proveedor';
import MiFormulario from './componentes/encuesta/encuesta';
import Cliente from './componentes/admin/cliente';
import Producto from './componentes/admin/producto';
import Factura from './componentes/admin/factura';
import Detallefactu from './componentes/admin/detallefactu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Principal/>}></Route>
    <Route path='principal' element={<Principal/>}></Route>
    <Route path='contacto' element={<Contacto/>}></Route>
    <Route path='conocenos' element={<Conocenos/>}></Route>
    <Route path='productos' element={<Productos/>}></Route>
    <Route path='proveedor' element={<Proveedor/>}></Route>
    <Route path='producto' element={<Producto/>}></Route>
    <Route path='cliente' element={<Cliente/>}></Route>
    <Route path='factura' element={<Factura/>}></Route>
    <Route path='detallefactu' element={<Detallefactu/>}></Route>
    <Route path='formulario' element={<MiFormulario/>}></Route> 
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
