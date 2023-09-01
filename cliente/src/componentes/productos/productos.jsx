import './productos.css'
import { Link } from "react-router-dom"

export default function Productos() {
    return (
        <>
            <body>
            <nav>
                <li >
                    <Link to={"/"} >Inicio</Link>
                    <Link to={"/conocenos"}>Quienes somos</Link>
                    <Link to={"/productos"} class="activa">Productos</Link>
                    <Link to={"/contacto"} >Contacto</Link>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
            </nav>
                <div class="carnes">
                    <li>
                        <link to={"./res.jsx"} href="" />

                        <Link to={"/productos"}>
                            <img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-beef.png" alt="cuts-of-beef" />
                            <p>Res</p>
                        </Link>
                        <a href="">
                            <img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-pork.png" alt="cuts-of-pork" />
                            <p>Cerdo</p>
                        </a>
                        <a href="">
                            <img width="80" height="80" src="https://img.icons8.com/dotty/80/chicken.png" alt="chicken" />
                            <p>Pollo</p>
                        </a>
                        <a href="">
                            <img width="80" height="80" src="https://img.icons8.com/dotty/80/clown-fish.png" alt="killed-fish" />
                            <p>Pescado</p>
                        </a>
                    </li>
                </div>
            </body>
            <footer>
                <h5>Copyrigth © 2023 Andres Sierra </h5>
            </footer>
        </>
    )
}