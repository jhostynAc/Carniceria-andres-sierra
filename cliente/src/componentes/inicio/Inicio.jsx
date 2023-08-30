import { Link } from "react-router-dom"
import "../inicio/inicio.css"

export default function Principal() {
    return (
<<<<<<< HEAD
          <body>
            <nav>
                    <li >
                        <Link href="./index.html" class="activa">Inicio</Link>
                        <Link to={"/conocenos"}>Quienes somos</Link>
                    </li>
                    <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li>
                        <Link to={"/pedidos"}>Productos</Link>
                        <Link to={"/ventas"}>Contacto</Link>
                    </li>
                </nav>
                <div class="cuadro-exotic1">
                    <img src="./imagenes/logo bn_Mesa de trabajo 1.png" alt="" />
                </div>
                <div class="texto2">
                    <a href=".">
                        <div class="botones">
                            <img src="./imagenes/icons8-cuts-of-beef-40.png" alt="" />
                            <div class="info">
                                <h4>res</h4>
                            </div>
                        </div>
                    </a>
                    <a href=".">
                        <div class="botones">
                            <img src="./imagenes/icons8-cuts-of-pork-40.png" alt="" />
                            <div class="info">
                                <h4>cerdo</h4>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="botones">
                            <img src="./imagenes/icons8-pollo-40.png" alt="" />
                            <div class="info">
                                <h4>pollo</h4>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div class="botones">
                            <img src="./imagenes/icons8-killed-fish-40.png" alt="" />
                            <div class="info">
                                <h4>Pescado</h4>
                            </div>
                        </div>
                    </a>
                </div>

                
            
          </body>
=======
        <>
            <body>
                <div className="caja">
                    <nav>
                        <li >
                            <Link href="./index.html" class="activa">Inicio</Link>
                            <Link to={"/conocenos"}>Quienes somos</Link>
                            <Link to={"/pedidos"}>Productos</Link>
                            <Link to={"/ventas"}>Contacto</Link>
                        </li>
                        <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    </nav>
                    <div className="inform">
                        <h1>Calidad y corte</h1>
                        <p>
                            Disfruta de los cortes más deliciosos de res
                            y cerdo en Medellín y el Oriente Antioqueño.
                        </p>
                    </div>

                </div>
                <div className="caja_inicio">
                    <h4 className="lineas">Catalogo</h4>
                </div>
                <div className="caja2_inicio">
                <h4 className="lineas">servicio</h4>
                <div className="conte">
                    <div className="tarjeta">
                    <h3>domicilio</h3>
                    <img src="https://camponoble.co/wp-content/uploads/2020/05/icono-domicilios-2.png" alt="" />
                    <p>oe la buena compra bien melo </p>
                </div>
                <div className="tarjeta">
                    <h3>domicilio</h3>
                    <img src="https://camponoble.co/wp-content/uploads/2020/05/icono-domicilios-2.png" alt="" />
                    <p>oe la buena compra bien melo </p>
                </div>
                </div>
                </div>
                
            </body > <footer>

            </footer>
        </>
>>>>>>> cd3fc75b0a8a1849468d9bd30dc2f1a8e6445075
    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar_1', window.scrollY > 0);
});
