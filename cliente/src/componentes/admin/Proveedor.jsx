import { Link } from "react-router-dom"
import "./proveedor.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Proveedor() {
    const [Cedula, setCedula] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Correo, setCorreo] = useState("");
    const [Contraseña, setContraseña] = useState("");
    const [Nit_proveedor, setNit_proveedor] = useState("");
    const [andres_sierraList, setAndressierra] = useState([]);

    const [id, setId] = useState(0)
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/create", {
            Cedula:Cedula,
            Nombre:Nombre,
            Apellidos:Apellidos,
            Correo:Correo,
            Contraseña:Contraseña,
            Nit_proveedor:Nit_proveedor
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
        setId(val.id);
       setCedula(val.Cedula)
       setNombre(val.Nombre)
       setApellidos(val.Apellidos)
       setCorreo(val.Correo)
       setContraseña(val.Contraseña)
       setNit_proveedor(val.Nit_proveedor)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/delete/${val.id}`, {
            id: id
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setCedula('')
        setNombre('')
        setApellidos('')
        setCorreo('')
        setContraseña('')
        setNit_proveedor('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/update", {
            id: id,
            Cedula:Cedula,
            Nombre:Nombre,
            Apellidos:Apellidos,
            Correo:Correo,
            Contraseña:Contraseña,
            Nit_proveedor:Nit_proveedor
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
                                <span className="input-group-text" id="basic-addon1">Cedula:</span>
                                <input type="text" value={Cedula} onChange={(event) => { setCedula(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                                <input type="text" value={Nombre} onChange={(event) => { setNombre(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Apellidos:</span>
                                <input type="text" value={Apellidos} onChange={(event) => { setApellidos(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Correo:</span>
                                <input type="text" value={Correo} onChange={(event) => { setCorreo(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Contraseña:</span>
                                <input type="text" value={Contraseña} onChange={(event) => { setContraseña(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Contraseña:</span>
                                <input type="text" value={Nit_proveedor} onChange={(event) => { setNit_proveedor(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                        return <tr key={val.id}>
                                            <td>{val.id}</td>
                                            <td>{val.Cedula}</td>
                                            <td>{val.Nombre}</td>
                                            <td>{val.Apellidos}</td>
                                            <td>{val.Correo}</td>
                                            <td>{val.Contraseña}</td>
                                            <td>{val.Nit_proveedor}</td>
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