import { Link } from "react-router-dom"
import "./producto.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Producto() {
    const [ID_Producto, setID_producto] = useState("");
    const [Nombre, setNombre] = useState("");
    const [Precio, setPrecio] = useState("");
    const [Tipo, setTipo] = useState("");
    const [ID_proveedor, setID_proveedor] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/crear", {
            ID_Producto: ID_Producto,
            Nombre: Nombre,
            Precio: Precio,
            Tipo:Tipo,
            ID_proveedor:ID_proveedor
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/Producto").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    const editarAndres_sierra = (val) => {
        setEditar(true);
        setID_producto(val.ID_Producto)
        setNombre(val.Nombre)
        setPrecio(val.Precio)
        setTipo(val.Tipo)
        setID_proveedor(val.ID_proveedor)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/borrar/${val.ID_Producto}`, {
            ID_Producto: ID_Producto
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setID_producto('')
        setNombre('')
        setPrecio('')
        setTipo('')
        setID_proveedor('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/actualizar", {
            ID_Producto: ID_Producto,
            Nombre: Nombre,
            Precio: Precio,
            Tipo:Tipo,
            ID_proveedor:ID_proveedor
        })
    }
    return (
        <body>
            <nav>
                <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
                <li >
                    <Link to={"/proveedor"}>Proveedor</Link>
                    <Link to={"/producto"} class="activa">Producto</Link>
                    <Link to={"/cliente"}>cliente</Link>
                    <Link to={"/factura"}>factura</Link>
                    <Link to={"/detallefactu"}>Detalle factura</Link>
                    <Link to={"/"}><img src="https://img.icons8.com/puffy/100/ffffff/experimental-home-puffy.png" alt="" className="home" /></Link>
                </li>
                
            </nav>
            <div className="cont">
                <div class="container">
                    <div class="card text-center">
                        <div class="card-header">
                            Producto
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">ID producto:</span>
                                <input type="text" value={ID_Producto} onChange={(event) => { setID_producto(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                                <input type="text" value={Nombre} onChange={(event) => { setNombre(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Precio:</span>
                                <input type="text" value={Precio} onChange={(event) => { setPrecio(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Tipo:</span>
                                <input type="text" value={Tipo} onChange={(event) => { setTipo(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Id proveedor:</span>
                                <input type="text" value={ID_proveedor} onChange={(event) => { setID_proveedor(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">ID producto</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Tipo</th>
                                    <th scope="col">ID proveedor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.ID_Producto}>
                                            <td>{val.ID_Producto}</td>
                                            <td>{val.Nombre}</td>
                                            <td>{val.Precio}</td>
                                            <td>{val.Tipo}</td>
                                            <td>{val.ID_proveedor}</td>
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