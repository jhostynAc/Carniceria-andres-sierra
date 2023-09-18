import { Link } from "react-router-dom"
import "./cliente.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Cliente() {
    const [ID_Cliente, setID_Cliente] = useState(0);
    const [Nombre, setNombre] = useState("");
    const [Direccion, setDireccion] = useState("");
    const [Telefono, setTelefono] = useState("");
    const [CorreoElectronico, setCorreoElectronico] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/creates", {
            Nombre: Nombre,
            Direccion: Direccion,
            Telefono: Telefono,
            CorreoElectronico: CorreoElectronico
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/cliente").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    const editarAndres_sierra = (val) => {
        setEditar(true);
        setID_Cliente(val.ID_Cliente)
        setNombre(val.Nombre)
        setDireccion(val.Direccion)
        setTelefono(val.Telefono)
        setCorreoElectronico(val.setCorreoElectronico)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/deletes/${val.ID_Cliente}`, {
            ID_Cliente: ID_Cliente
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setNombre('')
        setDireccion('')
        setTelefono('')
        setCorreoElectronico('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/updates", {
            ID_Cliente: ID_Cliente,
            Nombre: Nombre,
            Direccion: Direccion,
            Telefono: Telefono,
            CorreoElectronico: CorreoElectronico
        })
    }
    return (
        <body>
            <nav>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li >
                    <Link to={"/proveedor"}>Proveedor</Link>
                    <Link to={"/producto"} >ventas</Link>
                    <Link to={"/cliente"} class="activa">Cliente</Link>
                    <Link to={"/factura"}>factura</Link>
                    <Link to={"/detallefactu"}>Detalle factura</Link>
                </li>
                <Link to={"/"}><img src="https://img.icons8.com/puffy/100/ffffff/experimental-home-puffy.png" alt="" className="home" /></Link>

            </nav>
            <div className="cont">
                <div class="container">
                    <div class="card text-center">
                        <div class="card-header">
                            Cliente
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                                <input type="text" value={Nombre} onChange={(event) => { setNombre(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Direccion:</span>
                                <input type="text" value={Direccion} onChange={(event) => { setDireccion(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Telefono:</span>
                                <input type="text" value={Telefono} onChange={(event) => { setTelefono(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">CorreoElectronico:</span>
                                <input type="text" value={CorreoElectronico} onChange={(event) => { setCorreoElectronico(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">ID_cliente</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Direccion</th>
                                    <th scope="col">Telefono</th>
                                    <th scope="col">CorreoElectronico</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.ID_Cliente}>
                                            <td>{val.ID_Cliente}</td>
                                            <td>{val.Nombre}</td>
                                            <td>{val.Direccion}</td>
                                            <td>{val.Telefono}</td>
                                            <td>{val.CorreoElectronico}</td>
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