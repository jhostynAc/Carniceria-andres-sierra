import "../ventas/ventas.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

export default function Ventas() {
    const[nombre,setNombre]= useState("");
    const[cargo,setCargo]= useState("");
    const[edad,setEdad]= useState(0);
    const mostrardatos =()=>{
        alert(nombre);
    }
    return (
        <body>
            <nav>
                <li>
                    <a href="./index.html">Inicio</a>
                    <a href="./conocenos.html">Quienes somos</a>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li>
                    <a href="./pedido.html">Productos</a>
                    <a href="./contactos.html" class="activa">Contacto</a>
                </li>
            </nav>
            <div className="datos">
                <label>Nombre: <input onchange={(event)=>{setNombre(event.target.values)}}  type="text" /></label><br />
                <label>cargo: <input onchange={(event)=>{setCargo(event.target.values)}} type="text" /></label><br />
                <label>edad: <input onchange={(event)=>{setEdad(event.target.values)}}type="number" /></label><br />
                <button onClick={mostrardatos}>enviar</button>
            </div>
        </body>

    )
}