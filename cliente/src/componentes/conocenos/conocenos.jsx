import { Link } from "react-router-dom"
import "../conocenos/conocenos.css"

export default function Conocenos() {
    return (
        <>
            <body>
                <nav>
                    <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li >
                        <Link to={"/"}>Inicio</Link>
                        <Link to={"/conocenos"} class="activa">Quienes somos</Link>
                        <Link to={"/productos"}>Productos</Link>
                    </li>

                </nav>
                <div className="caja1">
                    <h2>QUIENES SOMOS</h2>
                    <h4 className="">La carnicería Andrés Sierra opera con un personal con experiencia, esto
                        nos convierte en un establecimiento que cuenta con un servicio optimo y satisfactorio
                        para aquellas personas que consumen de nuestros productos.</h4>
                </div>

                <div className="contenedorMVI">
                    <div className="izquierda">
                        <div className="mision">
                            <h2 className="mision">Misión</h2>
                            <h3 className="">Nuestra misión es
                             superar las expectativas de nuestros 
                             clientes en todo momento, llevando nuestros
                             productos cárnicos de calidad y frescura
                             excepcional, que se ajusten a las preferencias
                             y estilos de vida de nuestros compradores, para 
                             ser reconocidos como una empresa innovadora comercializando,
                             distribuyendo nuestros productos para que a medida del tiempo
                              se pueda establecer una nueva sede donde se encuentre el mejor
                               servicio y la mejor calidad..</h3>
                        </div>
                        <div className="vision">

                            <h2 className="mision">Visión</h2>
                            <h3 className="">
                                Nos visualizamos como una empresa líder en el mercado, 
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
                    <aside className="imgbody">
                        <img src="https://news.agrofystatic.com/carne-carniceria-203759.jpg?d=500x375" alt="" />
                    </aside>
                </div>



            </body>
            <footer>
                <h5>Copyrigth © 2023 Andres Sierra </h5>
            </footer>
        </>
    )
}