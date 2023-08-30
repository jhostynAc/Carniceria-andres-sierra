
import { Link } from "react-router-dom"
import "../pedidos/pedidos.css"

export default function Pedidos() {
    return (
        <body>
            <nav>
                <li>
                    <Link to={"/inicio"} class="activa">Inicio</Link>
                    <Link to={"/conocenos"}>Quienes somos</Link>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
               
                
                <li>
                    <Link to={"contacto"}>Contacto</Link>
                </li>
            </nav>

            <div class="carnes">
                     <li>
                    <link to={"./res.jsx"} href="" />

        <Link to={"/res"}>
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-beef.png" alt="cuts-of-beef"/>
            <p>Res</p>
        </Link>
        <a href="">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/cuts-of-pork.png" alt="cuts-of-pork"/>
            <p>Cerdo</p>
        </a>
        <a href="">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/chicken.png" alt="chicken"/>
            <p>Pollo</p>
        </a>
        <a href="">
            <img width="80" height="80" src="https://img.icons8.com/dotty/80/killed-fish.png" alt="killed-fish"/>
            <p>Pescado</p>
        </a>
    </li>
</div>


<section>
    
 <div class="galeria"> 
    <img src="https://tiendadecarnesfp.com/wp-content/uploads/2021/03/1-Tilapia-5-1-300x300.jpg" alt="" />
            <img src="https://tiendadecarnesfp.com/wp-content/uploads/2021/03/7-Espinazo-8-1.jpg" alt="" />
            <img src="https://media.scoolinary.app/blog/images/2020/07/despiece-carne-de-cerdo.jpg" alt="" />
            <img src="https://thefoodtech.com/wp-content/uploads/2020/09/maduracion-de-carne-de-pollo.jpg" alt="" />
            <img src="https://vixark.b-cdn.net/lp-i-i-g/carne-de-res-del-%C3%A9xito-1kg-solomo-y-ca%C3%B1%C3%B3n.jpg" alt="" />
            </div>
            
            </section>
        
            
         <footer>
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
    </body>
    
    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar_1', window.scrollY > 0);
});