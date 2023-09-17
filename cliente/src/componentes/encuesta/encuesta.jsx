import { Link } from "react-router-dom"
import "../contactenos/contacto.css"

export default function MiFormulario() {
    return (
        <body>
            <nav>
                <li >
                    <Link to={"/"} >Inicio</Link>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
            </nav>
            <div class="cuadro-exotic1_contacto">
                <div class="cuadro_2">
                    <h2>Formulario</h2>
                    <input class="texto1" type="text" placeholder="Nombre" />
                    <input type="email" placeholder="Correo" />

                    <label htmlFor="carne">Tipo de carne preferida:</label>
                    <select
                        id="carne"
                        name="carne"
                        required
                    >
                        <option value="">Seleccione una opción</option>
                        <option value="res">Res</option>
                        <option value="cerdo">Cerdo</option>
                        <option value="pollo">Pollo</option>
                    </select>
                    <label htmlFor="comentarios">Comentarios Adicionales o Sugerencias:</label>
                    <textarea
                        id="comentarios"
                        name="comentarios"
                        rows="4"
                        cols="50"
                    ></textarea>
                    <a href="">enviar</a>
                </div>
            </div>
        </body>
    )
}