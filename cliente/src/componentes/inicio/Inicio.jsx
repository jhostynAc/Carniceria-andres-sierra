import { Link } from "react-router-dom"
import "../inicio/inicio.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Principal() {
    return (
        <>
            <body>
                <div className="caja">
                    <nav>
                        <li >
                            <Link to={"/"} class="activa">Inicio</Link>
                            <Link to={"/conocenos"}>Quienes somos</Link>
                            <Link to={"/productos"}>Productos</Link>
                            <Link to={"/contacto"}>Contacto</Link>
                        </li>
                        <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    </nav>
                    <div className="inform">
                        <h1>Calidad y corte</h1>
                        <p>
                            Disfruta de los cortes más deliciosos de res
                            y cerdo en Medellín y el Oriente Antioqueño.
                        </p>
                    </div>

                </div>
                <div className="caja_inicio">
                    <h4 className="lineas">Catalogo</h4>
                    <div className="con">
                    
                    <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/cuts-of-beef.png" />
                        <Card.Body>
                            <Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Res</Button>
                        </Card.Body>
                    </Card> 
                    <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none'  }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/ffffff/pig.png"/>
                        <Card.Body>
                            <Link to={"productos"}><Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Cerdo</Button></Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none'  }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/chicken.png" />
                        <Card.Body>
                            <Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Pollo</Button>
                        </Card.Body>
                    </Card> 
                    <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none'  }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/clown-fish.png" />
                        <Card.Body>
                            <Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Pescado</Button>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
                <div className="caja2_inicio">
                    <h4 className="lineas">servicio</h4>
                    <div className="conte">
                        <div className="tarjeta">
                            <h3>domicilio</h3>
                            <img src="https://camponoble.co/wp-content/uploads/2020/05/icono-domicilios-2.png" alt="" />
                            <p>oe la buena compra bien melo </p>
                        </div>
                        <div className="tarjeta">
                            <h3>domicilio</h3>
                            <img src="https://camponoble.co/wp-content/uploads/2020/05/icono-domicilios-2.png" alt="" />
                            <p>oe la buena compra bien melo </p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="info">
                        <h3>Atencion cliente</h3>
                        <li> <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/ffffff/external-telephone-advertisement-tanah-basah-basic-outline-tanah-basah.png" alt="" />3147175537</li>
                        <li><img src="https://img.icons8.com/fluency-systems-regular/24/ffffff/new-post.png" alt="new-pos" />  andressierra@gmail.com</li>
                        <li><img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.png" alt="" /> andres sierra</li>
                    </div>
                    <div className="info">
                    <h3>Horarios y politica</h3>
                    <li><img src="https://img.icons8.com/material-outlined/24/ffffff/user--v1.png" alt="" /> lunes a domingo de <br /> 7:30 Am a 7:30 Pm</li>
                    <li><img src="https://img.icons8.com/external-line-zulfa-mahendra/24/ffffff/external-delivery-food-delivery-line-zulfa-mahendra.png" alt="" /> Domicilios a partir de los <br /> 50.000</li>
                    </div>
                    <div className="info">
                        <h3>sede</h3>
                        <li>
                            <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/ffffff/external-location-social-media-interface-anggara-basic-outline-anggara-putra.png" alt="" />
                            PUNTO DE VENTA <br /> 
                            LA GRANJA, Vía Vda. Mazo, Santa Elena, <br />
                             Medellín, Antioquia</li>
                    </div>
                </div>
            </body > 
            <footer>
                <h5>Copyrigth © 2023 Andres Sierra </h5> <Link to={"proveedor"}><img src="https://img.icons8.com/ios-glyphs/20/FFFFFF/user--v1.png" alt="" /></Link>
            </footer>
        </>
    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar_1', window.scrollY > 0);
});
