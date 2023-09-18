import { Link } from "react-router-dom"
import "./detallefactu.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Detallefactu() {
    const [ID_Detalle, setID_Detalle] = useState(0);
    const [ID_Factura, setID_Factura] = useState("");
    const [ID_Producto, setID_Producto] = useState("");
    const [Cantidad, setCantidad] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/creare", {
            ID_Factura:ID_Factura,
            ID_Producto:ID_Producto,
            Cantidad:Cantidad
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/DetalleFactura").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    const editarAndres_sierra = (val) => {
        setEditar(true);
        setID_Detalle(val.ID_Detalle)
        setID_Factura(val.ID_Factura)
        setID_Producto(val.ID_Producto)
        setCantidad(val.Cantidad)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/borrare/${val.ID_Detalle}`, {
            ID_Detalle: ID_Detalle
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setID_Factura('')
        setID_Producto('')
        setCantidad('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/actualizare", {
            ID_Detalle:ID_Detalle,    
            ID_Factura:ID_Factura,
            ID_Producto:ID_Producto,
            Cantidad:Cantidad
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
                    <Link to={"/factura"} >factura</Link>
                    <Link to={"/detallefactu"} class="activa">Detalle factura</Link>
                    <Link to={"/"}><img src="https://img.icons8.com/puffy/100/ffffff/experimental-home-puffy.png" alt="" className="home" /></Link>
                </li>
                
            </nav>
            <div className="cont">
                <div class="container">
                    <div class="card text-center">
                        <div class="card-header">
                            Detalle factura
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">ID factura:</span>
                                <input type="text" value={ID_Factura} onChange={(event) => { setID_Factura(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">ID producto:</span>
                                <input type="text" value={ID_Producto} onChange={(event) => { setID_Producto(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Cantidad:</span>
                                <input type="text" value={Cantidad} onChange={(event) => { setCantidad(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">ID Detalle</th>
                                    <th scope="col">ID factura </th>
                                    <th scope="col">ID producto</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.ID_Detalle}>
                                            <td>{val.ID_Detalle}</td>
                                            <td>{val.ID_Factura}</td>
                                            <td>{val.ID_Producto}</td>
                                            <td>{val.Cantidad}</td>
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