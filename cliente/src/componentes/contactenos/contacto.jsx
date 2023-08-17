import "../contactenos/contacto.css"

export default function Contacto() {
    return (
        <body>
            <nav>
                <li>
                    <a href="./index.html">Inicio</a>
                    <a href="./conocenos.html">Quienes somos</a>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li>
                    <a href="./pedido.html">Productos</a>
                    <a href="./contactos.html" class="activa">Contacto</a>
                </li>
            </nav>
            <div class="cuadro-exotic1">
                <h1>Contactos</h1>
                <p>Aca podras encontrar nuestras formas de contacto para alguna inquietud,queja o reclamo</p>
                <div class="cuadro">
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