import { Link } from "react-router-dom"
import "../inicio/inicio.css"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Principal() {
    return (
        <>
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
                <div class="cuadro-exotic2">
                    <div class="texto">
                        <h1>Nuestros productos</h1>
                        <p>son productos de alta calida los cuales son del campo colombiano
                            contamos con los mejores cortes y servicios para nuestros productos
                        </p>
                    </div>
                    <div class="texto2">
                        <a href="">
                            <div class="botones">
                                <img src="./imagenes/icons8-cuts-of-beef-40.png" alt="" />
                                <div class="info">
                                    <h4>res</h4>
                                </div>
                            </div>
                        </a>
                        <a href="">
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
                </div>
                <div class="cuadro-exotic3">
                    <Carousel>
                        <div>
                            <img src="./imagenes/cartel.png" alt="" />
                        </div>
                        <div>
                            <img src="./imagenes/repartidor.png" alt="" />
                        </div>
                        <div>
                            <img src="./imagenes/animacion.png" alt="" />
                        </div>
                    </Carousel>
                </div>
            </body > <footer>
                <div class="imagen">
                    <img src="./imagenes/logo bn_Mesa de trabajo 1.png" alt="" />
                </div>
                <div class="contenido">
                    <div class="textos">
                        <h4>Contacto</h4>
                        <p>3147175537</p>
                    </div>
                    <div class="textos">
                        <h4>Horarios</h4>
                        <p>Nuestros servicios van desde las 8am hasta las 8pm de lunes a sabado <br />
                            Los domingos Nuestros servicios van desde las 8am hasta las 2pm
                        </p>
                    </div>
                    <div class="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>
                        <i class='bx bxl-facebook-circle'></i>

                    </div>

                    <div class="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>
                        <i class="fa-brands fa-tiktok"></i>

                    </div>
                    <div class="icon">
                        <svg heigth="80" width="80">
                            <circle cx="40" cy="40" stroke="white" stroke-width="4" fill="none"></circle>
                        </svg>
                        <i class='bx bxl-instagram'></i>
                    </div>
                    <div class="textos">
                        <h4>Direccion</h4>
                        <p>Vía Vda. Mazo, Santa Elena, Medellín, Antioquia</p>
                    </div>

                </div>
                <div class="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463.5251584926393!2d-75.49555875382457!3d6.233914035712934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4427ba57cfd6ed%3A0x9cf641e74848383d!2sPUNTO%20DE%20VENTA%20LA%20GRANJA!5e0!3m2!1ses!2sco!4v1684432900628!5m2!1ses!2sco"
                        width="1350" height="600" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </footer>
        </>
    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar_1', window.scrollY > 0);
});
