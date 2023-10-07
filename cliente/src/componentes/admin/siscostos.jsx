import { Link } from "react-router-dom"
import "./siscostos.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Siscostos() {
    const [ID_siscostos, setID_siscostos] = useState("")
    const [Fecha, setFecha] = useState("");
    const [Cantidad, setCantidad] = useState("");
    const [Descripcion, setDescripcion] = useState("");
    const [Costo_uni, setCosto_uni] = useState("");
    const [CostoTotal, setCostoTotal] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/createsese", {
            Fecha: Fecha,
            Cantidad: Cantidad,
            Descripcion: Descripcion,
            Costo_uni: Costo_uni,
            CostoTotal: CostoTotal,
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/siscostos").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    const editarAndres_sierra = (val) => {
        setEditar(true);
        setID_siscostos(val.ID_siscostos)
        setFecha(val.Fecha)
        setCantidad(val.Cantidad)
        setDescripcion(val.Descripcion)
        setCosto_uni(val.Costo_uni)
        setCostoTotal(val.CostoTotal)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/deletesese/${val.ID_siscostos}`, {
            ID_siscostos: ID_siscostos
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setFecha('')
        setCantidad('')
        setDescripcion('')
        setCosto_uni('')
        setCostoTotal('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/updatesese", {
            ID_siscostos:ID_siscostos,  
            Fecha: Fecha,
            Cantidad: Cantidad,
            Descripcion: Descripcion,
            Costo_uni: Costo_uni,
            CostoTotal: CostoTotal,
        })
    }

    return (
        <body>
            <nav>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li >
                    <Link to={"/proveedor"}>Proveedor</Link>
                    <Link to={"/producto"} >Producto</Link>
                    <Link to={"/factura"} >factura</Link>
                    <Link to={"/empleado"}>Empleado</Link>
                    <Link to={"/siscostos"} class="activa">Sistema costos</Link>
                    <Link to={"/librocont"}>Libro Contable</Link>
                    <Link to={"/"}><img src="https://img.icons8.com/puffy/100/ffffff/experimental-home-puffy.png" alt="" className="home" /></Link>
                </li>

            </nav>
            <div className="cont">
                <div class="container">
                    <div class="card text-center">
                        <div class="card-header">
                            Sistema de costos
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Fecha:</span>
                                <input type="date" value={Fecha} onChange={(event) => { setFecha(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Cantidad:</span>
                                <input type="text" value={Cantidad} onChange={(event) => { setCantidad(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Descripcion:</span>
                                <input type="text" value={Descripcion} onChange={(event) => { setDescripcion(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Costo unitario:</span>
                                <input type="text" value={Costo_uni} onChange={(event) => { setCosto_uni(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Costo total:</span>
                                <input type="text" value={CostoTotal} onChange={(event) => { setCostoTotal(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Costo unitario</th>
                                    <th scope="col">Costo total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.ID_siscostos}>
                                            <td>{val.Fecha}</td>
                                            <td>{val.Cantidad}</td>
                                            <td>{val.Descripcion}</td>
                                            <td>{val.Costo_uni}</td>
                                            <td>{val.CostoTotal}</td>
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