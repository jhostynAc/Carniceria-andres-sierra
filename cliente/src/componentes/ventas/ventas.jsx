import "../ventas/ventas.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import Axios from "axios";

export default function Ventas() {
    const [nombre, setNombre] = useState("");
    const [cargo, setCargo] = useState("");
    const [edad, setEdad] = useState(0);
    const [holaList, setHola] = useState([]);

    const [id, setId] = useState(0)
    const [editar, setEditar] = useState(false);

    const add = () => {
        Axios.post("http://localhost:3005/create", {
            nombre: nombre,
            cargo: cargo,
            edad: edad
        }).then(() => {
            alert("llego");
        });
    }
    const getHola = () => {
        Axios.get("http://localhost:3005/hola").then((response) => {
            setHola(response.data);
        });
    }
    getHola();

    const editarHola = (val) => {
        setEditar(true);

        setId(val.id)
        setNombre(val.nombre);
        setCargo(val.cargo);
        setEdad(val.edad);
    }
    const eliminar = (val) =>{
        console.log(val)
        Axios.delete(`http://localhost:3005/delete/${val.id}`, {
            id: id
        }).then(()=>{
            getHola()
            alert("se eliminó")
        })
    }
    const limpiar = () =>{
        setId('')
        setNombre('')
        setCargo('')
        setEdad('')
        setEditar('')
    }
    const update = () => {
        Axios.put("http://localhost:3005/update", {
            id: id,
            nombre: nombre,
            cargo: cargo,
            edad: edad
        }).then(() => {
            getHola();
            alert("llego");
        });
    }
    return (
        <body>
            <div className="cont">
                <div class="container">
                    <div class="card text-center">
                        <div class="card-header">
                            listas
                        </div>
                        <div className="card-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">Nombre:</span>
                                <input type="text" value={nombre} onChange={(event) => { setNombre(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">cargo:</span>
                                <input type="text" value={cargo} onChange={(event) => { setCargo(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">edad:</span>
                                <input type="text" value={edad} onChange={(event) => { setEdad(event.target.value); }} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
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
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    holaList.map((val, key) => {
                                        return <tr key={val.id}>
                                            <td>{val.id}</td>
                                            <td>{val.nombre}</td>
                                            <td>{val.cargo}</td>
                                            <td>{val.edad}</td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" onClick={() => { editarHola(val) }} className="btn btn-warning">ediar</button>
                                                    <button type="button" className="btn btn-danger" onClick={()=> {eliminar(val)}}>eliminar</button>
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