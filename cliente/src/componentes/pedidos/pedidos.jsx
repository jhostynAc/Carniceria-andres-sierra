import "../pedidos/pedidos.css"

export default function Pedidos() {
    return (
        <body>
            <nav>
                <li>
                    <a href="./index.html">Inicio</a>
                    <a href="./conocenos.html">Quienes somos</a>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li>
                    <a href="./pedido.html" class="activa">Productos</a>
                    <a href="./contactos.html">Contacto</a>
                </li>
            </nav>
            <div class="contenedor">
                <div class="cuadro-1">
                    <li>
                        <p>Prudcto</p>
                        <p>cantidad</p>
                        <p>precio</p>
                    </li>
                </div>
                <div class="cuadro-2">
                    <a href="."><i class="fa-regular fa-circle-xmark"></i></a>
                    <img src="https://th.bing.com/th/id/OIP.SIQPH6mufXGcmK17k6TIvQHaE7?pid=ImgDet&rs=1" alt="" />
                    <li>
                        <p>Prudcto</p>
                        <p>cantidad</p>
                        <p>precio</p>
                    </li>
                </div>
            </div>
            <div class="contenedor-2">
                <div class="cuadro">
                    <h4>subtotal</h4>
                    <p>costo</p>
                </div>
                <div class="direccion">
                    <h4>Nombre</h4>
                    <input type="text" placeholder="Nombre" />
                    <h4>Direccion</h4>
                    <input type="text" placeholder="Direccion" />
                    <p>el costo del domicilio es de 10.000</p>
                </div>
                <div class="cuadroo">
                    <h4>total</h4>
                    <p>costo</p>
                </div>
                <div class="boton">
                    <a href=".">enviar</a>
                </div>
            </div>
        </body>
    )
}