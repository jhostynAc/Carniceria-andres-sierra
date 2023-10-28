import { Link } from "react-router-dom"
import "../encuesta/encuesta.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MiFormulario() {
    return (
        <>
            <body>
                <nav>
                    <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                    <li >
                        <Link to={"/"} >Inicio</Link>
                    </li>

                </nav>
                <div className="caja_encuesta">
                    <h4 className="lineas">Encuesta</h4>
                    <div className="con">
                        <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: '#161a1d', border: '1px solid gray', }}>
                            <Card.Img variant="top" src="./imagenes/joven_carnico.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: 'white', fontSize: '20px', marginTop: '25px' }}>Empleado</Card.Title>
                                <Link className="Link" to={'https://docs.google.com/forms/d/e/1FAIpQLScQKYGLmx58u5L6gA_FcXfTS4f2G2hhu56SeZ3XjsSBeeJ2Vw/viewform'} target="_blanck"><Button variant="primary" style={{ backgroundColor: '#660708', border: 'none', marginTop: '25px', marginLeft: '15px' }}>Hacer</Button></Link>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem', alignItems: 'center', backgroundColor: '#161a1d', border: '1px solid gray', }}>
                            <Card.Img variant="top" src="./imagenes/local.jpg" />
                            <Card.Body>
                                <Card.Title style={{ color: 'white', fontSize: '20px', marginTop: '25px' }}>Domicilio</Card.Title>
                                <Link className="Link" to={'https://docs.google.com/forms/d/e/1FAIpQLSfsuu8OVsCnWrN2zVfv_YNbjcogTKbeDmAj_4yHw3vZdyyAvw/viewform'} target="_blanck"><Button variant="primary" style={{ backgroundColor: '#660708', border: 'none', marginTop: '25px', marginLeft: '15px' }}>Hacer</Button></Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </body>
            <footer>
                <h5>Copyrigth © 2023 Andres Sierra </h5>
            </footer>
        </>
    )
}