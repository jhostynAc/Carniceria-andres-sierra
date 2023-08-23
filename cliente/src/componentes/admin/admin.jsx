import { Link } from "react-router-dom"
import "../admin/admin.css"

export default function Contacto() {
    return (
        <body>
              <nav>
                    <li>
                        <Link href="./index.html" >Inicio</Link>
                        <Link to={"/conocenos"} class="activa">Quienes somos</Link>
                    </li>
                    <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li>
                        <Link to={"/pedidos"}>Productos</Link>
                        <Link to={"contacto"}>Contacto</Link>
                    </li>
                </nav>
                
        </body>
    )
}