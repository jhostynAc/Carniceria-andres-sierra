import { useState,useEffect } from 'react'
import './factura.css'
import { Link } from "react-router-dom"
import Axios from "axios";

export default function Compra() {
    const [Cedula, setCedula] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Especificacion, setEspecificacion] = useState("");
    const [Fecha, setFecha] = useState("");
    const [Total, setTotal] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])

    const add = () => {
        Axios.post("http://localhost:3005/createse", {
            Cedula: Cedula,
            Nombre: Nombre,
            Direccion: Direccion,
            Especificacion: Especificacion,
            Fecha: Fecha,
            Total: Total,
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/factura").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    useEffect(() => {
        const totalGuardado = localStorage.getItem('Total');
        if (totalGuardado) {
          setTotal(JSON.parse(totalGuardado));
          console.log(totalGuardado)
        }
      }, []);
    return (
        <body>
            <nav>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li >
                    <Link to={"/productos"} >Volver</Link>
                </li>
            </nav>

            <div className="factura">
                <h3>Fomulario de compra</h3>
                <div className="factura_formulario">
                    <label htmlFor="">Cedula</label>
                    <input type="text" value={Cedula} onChange={(event) => { setCedula(event.target.value); }} placeholder='Cedula' />
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={Nombre} onChange={(event) => { setNombre(event.target.value); }} placeholder='Nombre' />
                    <label htmlFor="">Direccion</label>
                    <input type="text" value={Direccion} onChange={(event) => { setDireccion(event.target.value); }} placeholder='Direccion' />
                    <label htmlFor="">Especificacion</label>
                    <textarea type="text" value={Especificacion} onChange={(event) => { setEspecificacion(event.target.value); }} placeholder='Especificacion' />
                    <label htmlFor="">Fecha</label>
                    <input type="date" value={Fecha} onChange={(event) => { setFecha(event.target.value); }} placeholder='Fecha' />
                    <div className="cuadro_form">
                        <label htmlFor="">Total</label>
                        <p  value={Total} onChange={(event) => { setTotal(event.target.value); }}>{Total}</p>
                    </div>
                    <button onClick={add}>enviar</button>
                </div>
            </div>
        </body>
    )
}