import { Link } from "react-router-dom"
import "./empleado.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default  function Empleado (){
    const [Cedula, setCedula] = useState("")
    const [Nombre, setNombre] = useState("");
    const [Apellidos, setApellidos] = useState("");
    const [Sueldo, setSueldo] = useState("");
    const [andres_sierraList, setAndressierra] = useState([])
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/createses", {
            Cedula:Cedula,
            Nombre: Nombre,
            Apellidos:Apellidos,
            Sueldo:Sueldo
        }).then(() => {
            console.log('llega')
        });
    }
    const getAndres_sierra = () => {
        Axios.get("http://localhost:3005/empleado").then((response) => {
            setAndressierra(response.data);
        })
    }
    getAndres_sierra();

    const editarAndres_sierra = (val) => {
        setEditar(true);
        setCedula(val.Cedula)
        setNombre(val.Nombre)
        setApellidos(val.Apellidos)
        setSueldo(val.Sueldo)
    }
    const eliminar = (val) => {
        console.log(val)
        Axios.delete(`http://localhost:3005/deleteses/${val.Cedula}`, {
            Cedula: Cedula
        }).then(() => {
            getAndres_sierra()
        })
    }
    const limpiar = () => {
        setCedula('')
        setNombre('')
        setApellidos('')
        setSueldo('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/updateses", {
            Cedula:Cedula,
            Nombre: Nombre,
            Apellidos:Apellidos,
            Sueldo:Sueldo
        })
    }

    return(
        <body>
        <nav>
            <img src="./imagenes/Sin título-1_Mesa de trabajo 1.png" alt="" />
            <li >
                <Link to={"/proveedor"}>Proveedor</Link>
                <Link to={"/producto"} >Producto</Link>
                <Link to={"/factura"} >factura</Link>
                <Link to={"/empleado"} class="activa">Empleado</Link>
                <Link to={"/siscostos"} >Sistema costos</Link>
                <Link to={"/librocont"}>Libro Contable</Link>
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
                            <span className="input-group-text" id="basic-addon1">Cedula:</span>
                            <input type="text" value={Cedula} onChange={(event) => { setCedula(event.target.value); }} class="form-control" placeholder="Cédula del empleado" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Nombre:</span>
                            <input type="text" value={Nombre} onChange={(event) => { setNombre(event.target.value); }} class="form-control" placeholder="Nombres" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Apellidos:</span>
                            <input type="text" value={Apellidos} onChange={(event) => { setApellidos(event.target.value); }} class="form-control" placeholder="Apellidos" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        <div class="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">Sueldo:</span>
                            <input type="text" value={Sueldo} onChange={(event) => { setSueldo(event.target.value); }} class="form-control" placeholder="$" aria-label="Username" aria-describedby="basic-addon1" />
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
                                <th scope="col">Cedula</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellidos</th>
                                <th scope="col">Sueldo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                andres_sierraList.map((val, key) => {
                                    return <tr key={val.Cedula}>
                                        <td>{val.Cedula}</td>
                                        <td>{val.Nombre}</td>
                                        <td>{val.Apellidos}</td>
                                        <td>{val.Sueldo}</td>
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