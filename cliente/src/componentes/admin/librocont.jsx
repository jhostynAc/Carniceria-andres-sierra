import { Link } from "react-router-dom"
import "./librocont.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Librocont() {
    const [ID_librocont, setID_librocont] = useState("")
    const [Fecha, setFecha] = useState("");
    const [Detalle, setDetalle] = useState("");
    const [ComDia, setComDia] = useState("");
    const [Debe, setDebe] = useState("");
    const [Haber, setHaber] = useState("");
    const [Saldo, setSaldo] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/createseses", {
            Fecha: Fecha,
            Detalle: Detalle,
            ComDia: ComDia,
            Debe: Debe,
            Haber: Haber,
            Saldo: Saldo
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/librocont").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    const editarAndres_sierra = (val) => {
        setEditar(true);
        setID_librocont(val.ID_librocont)
        setFecha(val.Fecha)
        setDetalle(val.Detalle)
        setDebe(val.Debe)
        setHaber(val.Haber)
        setSaldo(val.Saldo)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/deleteseses/${val.ID_librocont}`, {
            ID_librocont: ID_librocont
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setFecha('')
        setDetalle('')
        setDebe('')
        setHaber('')
        setSaldo('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/updateseses", {
            ID_librocont:ID_librocont,
            Fecha: Fecha,
            Detalle: Detalle,
            ComDia: ComDia,
            Debe: Debe,
            Haber: Haber,
            Saldo: Saldo
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
                    <Link to={"/empleado"}>Empleado</Link>
                    <Link to={"/siscostos"} >Sistema costos</Link>
                    <Link to={"/librocont"} class="activa">Libro Contable</Link>
                    <Link to={"/"}><img src="https://img.icons8.com/puffy/100/ffffff/experimental-home-puffy.png" alt="" className="home" /></Link>
                </li>

            </nav>
            <div className="cont">
                <div class="container">
                    <div class="card text-center">
                        <div class="card-header">
                            Empleados
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Fecha:</span>
                                <input type="date" value={Fecha} onChange={(event) => { setFecha(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Detalle:</span>
                                <input type="text" value={Detalle} onChange={(event) => { setDetalle(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Comprobante dia:</span>
                                <input type="text" value={ComDia} onChange={(event) => { setComDia(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Debe:</span>
                                <input type="text" value={Debe} onChange={(event) => { setDebe(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Haber:</span>
                                <input type="text" value={Haber} onChange={(event) => { setHaber(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Saldo:</span>
                                <input type="text" value={Saldo} onChange={(event) => { setSaldo(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">Detalle</th>
                                    <th scope="col">Comprobante dia</th>
                                    <th scope="col"> Debe</th>
                                    <th scope="col">Haber</th>
                                    <th scope="col">Saldo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    andres_sierraList.map((val, key) => {
                                        return <tr key={val.ID_librocont}>
                                            <td>{val.Fecha}</td>
                                            <td>{val.Detalle}</td>
                                            <td>{val.ComDia}</td>
                                            <td>{val.Debe}</td>
                                            <td>{val.Haber}</td>
                                            <td>{val.Saldo}</td>
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