import { Link } from "react-router-dom"
import "./proveedor.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Proveedor() {
    const [id_proveedor, setId_proveedor] = useState(0);
    const [Empresa, setEmpresa] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/create", {
            id_proveedor: id_proveedor,
            Empresa: Empresa,
            Telefono: Telefono
        }).then(() => {
            alert('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/andres_sierra").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();
    const editarAndres_sierra = (val) => {
        setEditar(true);
        setId_proveedor(val.Cedula)
        setEmpresa(val.Empresa)
        setTelefono(val.Telefono)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/delete/${val.id_proveedor}`, {
            id_proveedor: id_proveedor
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setId_proveedor('')
        setEmpresa('')
        setTelefono('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/update", {
            id_proveedor: id_proveedor,
            Empresa: Empresa
        })
    }
    return (
        <body>
            <nav>
                <li >
                    <Link to={"/proveedor"} class="activa">Proveedor</Link>
                    <Link to={"/ventas"}>ventas</Link>
                    <Link to={"/productos"}>Productos</Link>
                    <Link to={"/contacto"}>Contacto</Link>
                </li>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
            </nav>
            <div className="cont">
                <div class="container">
                    <h2>Proveedor</h2>
                    <div class="card text-center">
                        <div class="card-header">
                            listas
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">id_proveedor:</span>
                                <input type="text" value={id_proveedor} onChange={(event) => { setId_proveedor(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Empresa:</span>
                                <input type="text" value={Empresa} onChange={(event) => { setEmpresa(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Telefono:</span>
                                <input type="text" value={Telefono} onChange={(event) => { setTelefono(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Cargo</th>
                                    <th scope="col">Edad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.id_proveedor}>
                                            <td>{val.id_proveedor}</td>
                                            <td>{val.Empresa}</td>
                                            <td>{val.Telefono}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" onClick={() => { editarAndres_sierra(val) }} className="btn btn-warning">ediar</button>
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