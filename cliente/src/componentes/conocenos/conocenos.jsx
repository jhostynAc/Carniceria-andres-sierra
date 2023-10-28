import { Link } from "react-router-dom"
import "../conocenos/conocenos.css"

export default function Conocenos() {
    return (
        <><body>

        <div className="grid">

                <nav className="grid1">
                    <img class="logo" src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li >
                        <Link to={"/"} class="li" >Inicio</Link>
                        <Link to={"/conocenos"} class="li activa">Quienes somos</Link>
                        <Link to={"/productos"} class="li">Productos</Link>
                    </li>
                </nav>

                <div className="grid2">
                    <h2>QUIENES SOMOS</h2>
                    <h4>La carnicería Andrés Sierra opera con un personal con experiencia, esto
                        nos convierte en un establecimiento que cuenta con un servicio optimo y satisfactorio
                        para aquellas personas que consumen de nuestros productos.
                    </h4>
                </div>

                
                    <div className="grid3">
                            <div className="uno">
                            <h2>Misión</h2>
                            <h3>Nuestra misión es
                                superar las expectativas de nuestros
                                clientes en todo momento, llevando nuestros
                                productos cárnicos de calidad y frescura
                                excepcional, que se ajusten a las preferencias
                                y estilos de vida de nuestros compradores, para
                                ser reconocidos como una empresa innovadora comercializando,
                                distribuyendo nuestros productos para que a medida del tiempo
                                se pueda establecer una nueva sede donde se encuentre el mejor
                                servicio y la mejor calidad.
                            </h3></div>

                           <div className="imagen_mision">
                              <img src="./imagenes/joven_carnico.jpg" alt="carniceria" />
                           </div>
                    </div>

                        <div className="grid4">
                            <div className="uno">
                            <h2>Visión</h2>
                            <h3>Nos visualizamos como una empresa líder en el mercado,
                                ofreciendo una amplia gama de productos cárnicos que sean
                                reconocidos por su calidad, frescura, consistencia, y la
                                fomentación del consumo de productos para promover una alimentación
                                equilibrada y nutritiva al llegar a los 10 años, estableceremos alianzas
                                estratégicas con proveedores y distribuidores a nivel global, expandiendo
                                así nuestra presencia nacional de manera significativa, en un plazo de 15
                                años, la empresa se consolidara como líder indiscutible en la industria cárnica,
                                reconocida por su enfoque en la calidad, innovación y responsabilidad ambiental,
                                mirando 20 años en el futuro seremos un modelo a seguir en la industria alimentaria,
                                inspirando a otras compañías adoptar modelos de negocios responsables y amigables,
                                nuestra historia será un testimonio de como la visión a largo plazo y la innovación
                                pueden forjar un futuro exitoso y sostenible.
                            </h3>
                           </div>
                           
                        </div>

                <footer className="grid5">
                  <h5>Copyrigth © 2023 Andres Sierra </h5>
                </footer>
            </div>
            </body>
        </>
    )
}