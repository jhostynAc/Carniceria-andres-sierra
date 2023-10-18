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
                        <Link to={"login"}><img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" /></Link>
                        <li >
                            <Link to={"/"} class="activa">Inicio</Link>
                            <Link to={"/conocenos"}>Quienes somos</Link>
                            <Link to={"/productos"}>Productos</Link>
                        </li>

                    </nav>
                    <div className="inform">
                        <h1>Calidad y corte</h1>
                        <p>
                            En nuestra carnicería, nos enorgullecemos de ofrecer los cortes de carne más frescos y sabrosos, seleccionados cuidadosamente para satisfacer los paladares más exigentes. Desde hace generaciones, hemos sido parte de la comunidad, sirviendo productos cárnicos de la más alta calidad con un toque de autenticidad que nos distingue.
                        </p>
                    </div>

                </div>
                <div className="caja_inicio">
                    <h4 className="lineas">Catalogo</h4>
                    <div className="con">
                        <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: '#161a1d', border: 'none' }}>
                            <Card.Img variant="top" src="https://img.icons8.com/dotty/500/ffffff/pig.png" />
                            <Card.Body>
                                <Link to="/productos#cerdo"><Button variant="primary" style={{ backgroundColor: '#660708', border: 'none' }}>Cerdo</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: '#161a1d', border: 'none' }}>
                            <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/cuts-of-beef.png" />
                            <Card.Body>
                                <Link to="/productos#res"><Button variant="primary" style={{ backgroundColor: '#660708', border: 'none' }}>Res</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: '#161a1d', border: 'none' }}>
                            <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/chicken.png" />
                            <Card.Body>
                                <Link to="/productos#pollo"><Button variant="primary" style={{ backgroundColor: '#660708', border: 'none' }}>Pollo</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: '#161a1d', border: 'none' }}>
                            <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/clown-fish.png" />
                            <Card.Body>
                                <Link to="/productos#pescado"><Button variant="primary" style={{ backgroundColor: '#660708', border: 'none' }}>Pecado</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="caja2_inicio">
                    <h4 className="lineas">servicio</h4>
                    <div className="conte">
                        <Link to={"/formulario"} className="Linktarjetas">
                            <div className="tarjeta">
                                <h3>Encuesta</h3>
                                <img src="https://img.icons8.com/glyph-neue/500/FFFFFF/survey--v1.png" alt="" />
                                <p>Realizar encuesta</p>
                            </div>
                        </Link>
                        <Link to={"/productos"} className="Linktarjetas">
                            <div className="tarjeta">
                                <h3>Domicilio</h3>
                                <img src="https://img.icons8.com/ios-glyphs/500/FFFFFF/scooter.png" alt="" />
                                <p>Realizar pedido </p>
                            </div>
                        </Link>

                    </div>
                </div>
                <div className="footer">
                    <div className="info">
                        <h3>Atencion cliente</h3>
                        <Link className="Link" to={'https://wa.me/3147175537'} target="_blanck"><li> <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/ffffff/external-telephone-advertisement-tanah-basah-basic-outline-tanah-basah.png" alt="" />3147175537</li></Link>
                        <Link className="Link" to={'mailto:carniceriaandresierra@gmail.com'} target="_blanck"><li><img src="https://img.icons8.com/fluency-systems-regular/24/ffffff/new-post.png" alt="new-pos" /> carniceriaandresierra@gmail.com</li></Link>
                        <Link className="Link" to={'https://www.instagram.com/andres.sierra_carniceria/?img_index=3'} target="_blanck"><li><img src="https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.png" alt="" /> @andres.sierra_carniceria</li></Link>
                        <Link className="Link" to={'https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61551804040542%26mibextid%3DLQQJ4d'} target="_blanck"><li><img src="https://img.icons8.com/ios-glyphs/24/ffffff/facebook.png" alt="" />Carniceria andres sierra</li></Link>
                        <Link className="Link" to={'https://www.tiktok.com/@carniceria_andres_sierra?lang=es'} target="_blanck"><li><img src="https://img.icons8.com/ios-glyphs/24/ffffff/tiktok.png" alt="" /> @carniceria_andres_sierra</li></Link>
                    </div>
                    <div className="info">
                        <h3>Horarios y politica</h3>
                        <li><img src="https://img.icons8.com/material-outlined/24/ffffff/user--v1.png" alt="" /> lunes a domingo de 7:30 Am a 7:30 Pm</li>
                        <li><img src="https://img.icons8.com/external-line-zulfa-mahendra/24/ffffff/external-delivery-food-delivery-line-zulfa-mahendra.png" alt="" /> Domicilios a partir de los  50.000</li>
                    </div>
                    <div className="info">
                        <h3>sede</h3>
                        <Link className="Link" to={"https://maps.app.goo.gl/uKUGiEft1bgqz6Bp8"} target="_blanck"><li>
                            <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/ffffff/external-location-social-media-interface-anggara-basic-outline-anggara-putra.png" alt="" />
                            PUNTO DE VENTA
                            LA GRANJA, Vía Vda. Mazo, Santa Elena,
                            Medellín, Antioquia</li></Link>
                    </div>
                </div>
            </body >
            <footer>
                <h5>Copyrigth © 2023 Andres Sierra </h5>
            </footer>
        </>
    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar_1', window.scrollY > 0);
});
