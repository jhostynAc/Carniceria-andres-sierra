import { Link } from "react-router-dom"
import "../inicio/inicio.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Principal() {
    return (
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
    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar_1', window.scrollY > 0);
});
