import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Principal from './componentes/inicio/Inicio';
import Conocenos from './componentes/conocenos/conocenos';
import Productos from './componentes/productos/productos';
import Proveedor from './componentes/admin/Proveedor';
import MiFormulario from './componentes/encuesta/encuesta';
import Producto from './componentes/admin/producto';
import Factura from './componentes/admin/factura';
import Empleado from './componentes/admin/empleado';
import Siscostos from './componentes/admin/siscostos';
import Librocont from './componentes/admin/librocont';
import Login from './componentes/admin/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Principal/>}></Route>
    <Route path='principal' element={<Principal/>}></Route>
    <Route path='conocenos' element={<Conocenos/>}></Route>
    <Route path='productos' element={<Productos/>}></Route>
    <Route path='proveedor' element={<Proveedor/>}></Route>
    <Route path='producto' element={<Producto/>}></Route>
    <Route path='factura' element={<Factura/>}></Route>
    <Route path='empleado' element={<Empleado/>}></Route>
    <Route path='siscostos' element={<Siscostos/>}></Route>
    <Route path='librocont' element={<Librocont/>}></Route>
    <Route path='formulario' element={<MiFormulario/>}></Route> 
    <Route path='login' element={<Login/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
