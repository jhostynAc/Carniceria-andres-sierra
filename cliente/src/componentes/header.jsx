import React from "react";
import "./header.css"

function Header() {
    return (
        <body>
            <nav>
                <li>
                    <a href="./index.html" class="activa">Inicio</a>
                    <a href="./conocenos.html">Quienes somos</a>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li>
                    <a href="./pedido.html">Productos</a>
                    <a href="./contactos.html">Contacto</a>
                </li>
            </nav>
        </body>

    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar', window.scrollY > 0);
});


export default Header;