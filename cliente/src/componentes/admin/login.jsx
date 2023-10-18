import { Link } from "react-router-dom"
import "../admin/login.css"
import { useState } from "react"
import Axios from "axios";

export default function Login() {
    const [Nombre, setNombre] = useState('')
    const [Contraseña, setContraseña] = useState('')
    
    function handleSubmit(event){
        event.preventDefault();
        Axios.post('http://localhost:3005/login',{Nombre,Contraseña})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
    return (
        <>
            <body>
                <nav>
                    <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li >
                        <Link to={"/"}>Inicio</Link>
                    </li>
                </nav>
                <div className="contenedor-login">
                    <form className="formulario" onSubmit={handleSubmit}>
                        <input type="email"  placeholder="Usuario" onChange={e => setNombre(e.target.value)}/>
                        <input type="password"  placeholder=" Contraseña" onChange={e => setContraseña(e.target.value)}/>
                        <a href="proveedor" onClick ={handleSubmit}>aasda</a>
                    </form>
                </div>
            </body>
            <footer>
                <h5>Copyrigth © 2023 Andres Sierra </h5>
            </footer>
        </>
    )
}