import "../contactenos/contacto.css"

export default function Contacto() {
    return (
        <body>
         
            <div class="cuadro-exotic1_contacto">
                <h1>Contactos</h1>
                <p>Aca podras encontrar nuestras formas de contacto para alguna inquietud,queja o reclamo</p>
                <div class="cuadro_2">
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