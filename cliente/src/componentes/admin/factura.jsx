import { Link } from "react-router-dom"
import "./producto.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Factura() {
    const [ID_Factura, setID_Factura] = useState(0);
    const [Cedula, setCedula] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Especificacion, setEspecificacion] = useState("");
    const [Fecha, setFecha] = useState("");
    const [Total, setTotal] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/createse", {
            Cedula: Cedula,
            Nombre: Nombre,
            Direccion: Direccion,
            Especificacion: Especificacion,
            Fecha: Fecha,
            Total: Total,
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/factura").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    const editarAndres_sierra = (val) => {
        setEditar(true);
        setID_Factura(val.ID_Factura)
        setCedula(val.Cedula)
        setNombre(val.Nombre)
        setDireccion(val.Direccion)
        setEspecificacion(val.Especificacion)
        setFecha(val.Fecha)
        setTotal(val.Total)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/deletese/${val.ID_Factura}`, {
            ID_Factura: ID_Factura
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setCedula('')
        setNombre('')
        setDireccion('')
        setEspecificacion('')
        setFecha('')
        setTotal('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/updatese", {
            ID_Factura: ID_Factura,
            Cedula: Cedula,
            Nombre: Nombre,
            Direccion: Direccion,
            Especificacion: Especificacion,
            Fecha: Fecha,
            Total: Total,
        })
    }
    return (
        <body>
            <nav>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li >
                    <Link to={"/proveedor"}>Proveedor</Link>
                    <Link to={"/producto"} >Producto</Link>
                    <Link to={"/factura"} class="activa">factura</Link>
                    <Link to={"/empleado"} >Empleado</Link>
                    <Link to={"/siscostos"} >Sistema costos</Link>
                    <Link to={"/librocont"}>Libro Contable</Link>
                    <Link to={"https://app.zipbooks.com/"} target="_blanck">Sofware</Link>
                    <Link to={"/"}><img src="https://img.icons8.com/puffy/100/ffffff/experimental-home-puffy.png" alt="" className="home" /></Link>
                </li>

            </nav>
            <div className="cont">
                <div class="container">
                    <div class="card text-center">
                        <div class="card-header">
                            Factura
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Cedula:</span>
                                <input type="text" value={Cedula} onChange={(event) => { setCedula(event.target.value); }} class="form-control" placeholder="cédua cliente" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                                <input type="text" value={Nombre} onChange={(event) => { setNombre(event.target.value); }} class="form-control" placeholder="Nombre del cliente" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Direccion:</span>
                                <input type="text" value={Direccion} onChange={(event) => { setDireccion(event.target.value); }} class="form-control" placeholder="Dirección" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Especificacion:</span>
                                <input type="text" value={Especificacion} onChange={(event) => { setEspecificacion(event.target.value); }} class="form-control" placeholder="Especificaciones " aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Fecha:</span>
                                <input type="date" value={Fecha} onChange={(event) => { setFecha(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Total:</span>
                                <input type="text" value={Total} onChange={(event) => { setTotal(event.target.value); }} class="form-control" placeholder="Total de la compra " aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                        <div className="card-footer text-body-secondary">
                            {
                                editar == true ?
                                    <div>
                                        <button className="btn btn-warning m-2" onClick={update}>actualizar</button>
                                        <button className="btn btn-danger m-2" onClick={limpiar}>Cancelar</button>
                                    </div>
                                    : <button className="btn btn-success" onClick={add}>enviar</button>
                            }
                        </div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID Factura</th>
                                    <th scope="col">Cedula</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Especificacion</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.ID_Factura}>
                                            <td>{val.ID_Factura}</td>
                                            <td>{val.Cedula}</td>
                                            <td>{val.Nombre}</td>
                                            <td>{val.Direccion}</td>
                                            <td>{val.Especificacion}</td>
                                            <td>{val.Fecha}</td>
                                            <td>{val.Total}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" onClick={() => { editarAndres_sierra(val) }} className="btn btn-warning">editar</button>
                                                    <button type="button" className="btn btn-danger" onClick={() => { eliminar(val) }}>eliminar</button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </body>

    )
}