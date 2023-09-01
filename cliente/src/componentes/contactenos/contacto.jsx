import { Link } from "react-router-dom"
import "../contactenos/contacto.css"

export default function Contacto() {
    return (
        <body>
            <nav>
                <li >
                    <Link to={"/"} >Inicio</Link>
                    <Link to={"/conocenos"}>Quienes somos</Link>
                    <Link to={"/productos"}>Productos</Link>
                    <Link to={"/contacto"} class="activa">Contacto</Link>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
            </nav>
            <div class="cuadro-exotic1_contacto">
                <h1>Contactos</h1>
                <p>Aca podras encontrar nuestras formas de contacto para alguna inquietud,queja o reclamo</p>
                <div class="cuadro_2">
                    <h2>Formulario</h2>
                    <input class="texto1" type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />
                    <input type="text" placeholder="Mensaje" />
                    <a href="">enviar</a>
                </div>
            </div>
        </body>
    )
}