import "../conocenos/conocenos.css"

export default function Conocenos(){
    return(
        <body>
    <div class="div">
        <header class="header caja c1">
            <li><a href="./index.html">Inicio</a> </li>
            <li><a class="activa" href="./conocenos.html"> Quienes somos</a></li>  
        <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt=""/>
        <li><a href="./pedido.html">Productos</a></li>
        <li><a href="./contactos.html">Contacto</a></li>
        </header>

        <nav class="caja c2">
            <h1 class="titulo">QUIENES SOMOS</h1>
                <p class="parrafo">La carnicería Andrés Sierra opera con un personal con experiencia, esto
                    nos convierte en un establecimiento que cuenta con un servicio optimo y satisfactorio
                    para aquellas personas que consumen de nuestros productos.</p>
        </nav>
        
        <section class="caja c3">
            <div class="grande">
                <div class="uno">
                    <h1 class="titulo">Misión</h1>
                    <p class="parrafo">Somos una carnicería dedicada a la prestación de servicio
                        al público, brindando productos de calidad y bajo costo a nuestros clientes.
                    </p>

                    <h1 class="titulo">Visión</h1>
                    <p class="parrafo">Para el año 2026 la carnicería Andrés Sierra prestará de sus 
                        servicios por todo Santa Elena, siendo asi un referente de carnes de calidad por 
                        todo el corregimiento.
                    </p>
                </div>
            </div>
        </section>

        <aside class="caja c4">
                    <div class="dos">
                    <div class="imagen">
                        <img src="https://news.agrofystatic.com/carne-carniceria-203759.jpg?d=500x375" alt=""/>
                    </div>
             </div>
        </aside>
        
        <footer class="caja c5">
           <div class="padre">
            <div class="localizacion">
            <div class="contacto">
            <h1 class="info">Contacto</h1>
            <p class="descripcion">3147175537</p>
        </div>
           <div class="contacto2">
                <h1 class="info">Dirección</h1>
                <p class="descripcion">Vía Vda. Mazo, Santa Elena, Medellín, Antioquia</p>
</div></div>
            <div class="horario">
                <h1 class="info">Horario</h1>
                <p class="descripcion">Nuestros servicios van desde las 8am hasta las 8pm de lunes a sabado
                    Los domingos Nuestros servicios van desde las 8am hasta las 2pm</p>
            </div>

            <div class="redes">
                <a href="" class="face"></a>
                <a href="https://www.tiktok.com/@carniceria_andres_sierra?is_from_webapp=1&sender_device=pc" class="tiktok"></a>
                <a href="" class="instagram"></a>
            </div>
          </div>
        </footer>
        
    </div>

</body>
    )
}