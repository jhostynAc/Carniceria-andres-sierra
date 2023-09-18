import { Link } from "react-router-dom"
import "./producto.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Factura() {
    const [ID_Factura, setID_Factura] = useState(0);
    const [Fecha, setFecha] = useState("");
    const [Total, setTotal] = useState("");
    const [ID_Cliente, setID_Cliente] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/createse", {
            Fecha: Fecha,
            Total: Total,
            ID_Cliente:ID_Cliente,
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
        setFecha(val.Fecha)
        setTotal(val.Total)
        setID_Cliente(val.ID_Cliente)
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
        setFecha('')
        setTotal('')
        setID_Cliente('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/updatese", {
            ID_Factura:ID_Factura,
            Fecha: Fecha,
            Total: Total,
            ID_Cliente:ID_Cliente,
        })
    }
    return (
        <body>
            <nav>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li >
                    <Link to={"/proveedor"}>Proveedor</Link>
                    <Link to={"/producto"} >Producto</Link>
                    <Link to={"/cliente"}>cliente</Link>
                    <Link to={"/factura"} class="activa">factura</Link>
                    <Link to={"/detallefactu"}>Detalle factura</Link>
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
                                <span className="input-group-text" id="basic-addon1">Fecha:</span>
                                <input type="date" value={Fecha} onChange={(event) => { setFecha(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Total:</span>
                                <input type="text" value={Total} onChange={(event) => { setTotal(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">ID cliente:</span>
                                <input type="text" value={ID_Cliente} onChange={(event) => { setID_Cliente(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">ID Cliente</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.ID_Factura}>
                                            <td>{val.ID_Factura}</td>
                                            <td>{val.Fecha}</td>
                                            <td>{val.Total}</td>
                                            <td>{val.ID_Cliente}</td>
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