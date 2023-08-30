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
                            <Link href="./index.html" class="activa">Inicio</Link>
                            <Link to={"/conocenos"}>Quienes somos</Link>
                            <Link to={"/ventas"}>Productos</Link>
                            <Link to={"/conocenos"}>Contacto</Link>
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
                    <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none'  }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/cuts-of-pork.png"/>
                        <Card.Body>
                            <Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none' }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/cuts-of-beef.png" />
                        <Card.Body>
                            <Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Go somewhere</Button>
                        </Card.Body>
                    </Card> <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none'  }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/chicken.png" />
                        <Card.Body>
                            <Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Go somewhere</Button>
                        </Card.Body>
                    </Card> <Card style={{ width: '18rem',alignItems:'center',backgroundColor:'#161a1d',border:'none'  }}>
                        <Card.Img variant="top" src="https://img.icons8.com/dotty/500/FFFFFF/killed-fish.png" />
                        <Card.Body>
                            <Button variant="primary" style={{backgroundColor:'#660708',border:'none'}}>Go somewhere</Button>
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
                    
                </div>
            </body > 
            <footer>
            </footer>
        </>
    )
}

window.addEventListener('scroll', function () {
    var nav = this.document.querySelector('nav');
    nav.classList.toggle('bajar_1', window.scrollY > 0);
});
