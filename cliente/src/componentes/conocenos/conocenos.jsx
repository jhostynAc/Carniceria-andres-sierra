import { Link } from "react-router-dom"
import "../conocenos/conocenos.css"

export default function Conocenos() {
    return (
        <>
            <body>
                <nav>
                   <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li >
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/conocenos"} class="activa">Quienes somos</Link>
                        <Link to={"/productos"}>Productos</Link>
                        <Link to={"/contacto"}>Contacto</Link>
                    </li>

                </nav>
                <div className="caja1">
                    <h2>QUIENES SOMOS</h2>
                    <h4 className="">La carnicería Andrés Sierra opera con un personal con experiencia, esto
                        nos convierte en un establecimiento que cuenta con un servicio optimo y satisfactorio
                        para aquellas personas que consumen de nuestros productos.</h4>
                </div>

                <div className="contenedorMVI">
                    <div className="izquierda">
                        <div className="mision">
                            <h2 className="mision">Misión</h2>
                            <h3 className="">Somos una carnicería dedicada a la prestación de servicio
                                al público, brindando productos de calidad y bajo costo a nuestros clientes.</h3>
                        </div>
                        <div className="vision">

                            <h2 className="mision">Visión</h2>
                            <h3 className="">Para el año 2026 la carnicería Andrés Sierra prestará de sus
                                servicios por todo Santa Elena, siendo asi un referente de carnes de calidad por
                                todo el corregimiento.</h3>
                        </div>
                    </div>
                    <aside className="imgbody">
                        <img src="https://news.agrofystatic.com/carne-carniceria-203759.jpg?d=500x375" alt="" />
                    </aside>
                </div>



            </body>
            <footer>
                <h5>Copyrigth © 2023 Andres Sierra </h5>
            </footer>
        </>
    )
}