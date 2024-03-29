const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "andres_sierra"
})

app.post("/create", (req, res) => {
    const ID_proveedor = req.body.ID_proveedor
    const Empresa = req.body.Empresa
    const Telefono = req.body.Telefono

    db.query('INSERT INTO proveedor(ID_proveedor,Empresa,Telefono) VALUES(?,?,?)', [ID_proveedor, Empresa, Telefono],
        (err, result) => {
            if (err) {
                console.log("err");
            } else {
                res.send("registro echo")
            }
        }
    );
});

app.get("/proveedor", (req, res) => {
    db.query('SELECT * FROM proveedor',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.put("/update", (req, res) => {
    const ID_proveedor = req.body.ID_proveedor
    const Empresa = req.body.Empresa
    const Telefono = req.body.Telefono

    db.query('UPDATE proveedor SET ID_proveedor=?,Empresa=?,Telefono=?', [ID_proveedor, Empresa, Telefono],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("actualizacio echo")
            }
        }
    );
});

app.delete("/delete/:ID_proveedor", (req, res) => {
    const ID_proveedor = req.params.ID_proveedor
    console.log('se fue ')
    db.query('DELETE FROM proveedor WHERE ID_proveedor  = ?', [ID_proveedor],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("se eliminó melo")
            }
        })
})

app.listen(3005, () => {
    console.log("corriendo");
})

app.post("/crear", (req, res) => {
    const ID_Producto = req.body.ID_Producto
    const Imagen = req.body.Imagen
    const Nombre = req.body.Nombre
    const Precio = req.body.Precio
    const Tipo = req.body.Tipo
    const ID_proveedor = req.body.ID_proveedor

    db.query('INSERT INTO Producto(ID_Producto,Nombre,Precio,Tipo,ID_proveedor,Imagen) VALUES(?,?,?,?,?,?)', [ID_Producto, Nombre, Precio, Tipo, ID_proveedor, Imagen],
        (err, result) => {
            if (err) {
                console.log("err");
            } else {
                res.send("registro echo")
            }
        }
    );
});

app.get("/Producto", (req, res) => {
    db.query('SELECT * FROM Producto',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.put("/actualizar", (req, res) => {
    const ID_Producto = req.body.ID_Producto
    const Imagen = req.body.Imagen
    const Nombre = req.body.Nombre
    const Precio = req.body.Precio
    const Tipo = req.body.Tipo
    const ID_proveedor = req.body.ID_proveedor

    db.query('UPDATE Producto SET ID_Producto=?,Nombre=?,Precio=?,Tipo=?,ID_proveedor=?,Imagen=?', [ID_Producto, Nombre, Precio, Tipo, ID_proveedor, Imagen],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("actualizacio echo")
            }
        }
    );
});

app.delete("/borrar/:ID_Producto", (req, res) => {
    const ID_Producto = req.params.ID_Producto
    console.log('se fue ')
    db.query('DELETE FROM Producto WHERE ID_Producto  = ?', [ID_Producto],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("se eliminó melo")
            }
        })
})
app.post("/createse", (req, res) => {
    const Cedula = req.body.Cedula
    const Nombre = req.body.Nombre
    const Direccion = req.body.Direccion
    const Especificacion = req.body.Especificacion
    const Fecha = req.body.Fecha
    const Total = req.body.Total

    db.query('INSERT INTO Factura (Cedula,Nombre,Direccion,Especificacion,Fecha,Total) VALUES(?,?,?,?,?,?)', [Cedula, Nombre, Direccion, Especificacion, Fecha, Total],
        (err, result) => {
            if (err) {
                console.log("err");
            } else {
                res.send("registro echo")
            }
        }
    );
});

app.get("/factura", (req, res) => {
    db.query('SELECT * FROM Factura',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.put("/updatese", (req, res) => {
    const ID_Factura = req.body.ID_Factura
    const Cedula = req.body.Cedula
    const Nombre = req.body.Nombre
    const Direccion = req.body.Direccion
    const Especificacion = req.body.Especificacion
    const Fecha = req.body.Fecha
    const Total = req.body.Total

    db.query('UPDATE Factura SET Cedula=?,Nombre=?,Direccion=?,Especificacion=?,Fecha=?,Total=? WHERE ID_Factura=?', [Cedula, Nombre, Direccion, Especificacion, Cantidad, Fecha, Total, ID_Factura],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("actualizacio echo")
            }
        }
    );
});

app.delete("/deletese/:ID_Factura", (req, res) => {
    const ID_Factura = req.params.ID_Factura
    console.log('se fue ')
    db.query('DELETE FROM Factura WHERE ID_Factura = ?', [ID_Factura],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("se eliminó melo")
            }
        })
})


app.post("/createses", (req, res) => {
    const Cedula = req.body.Cedula
    const Nombre = req.body.Nombre
    const Apellidos = req.body.Apellidos
    const Sueldo = req.body.Sueldo

    db.query('INSERT INTO Empleado (Cedula,Nombre,Apellidos,Sueldo) VALUES(?,?,?,?)', [Cedula, Nombre, Apellidos, Sueldo],
        (err, result) => {
            if (err) {
                console.log("err");
            } else {
                res.send("registro echo")
            }
        }
    );
});

app.get("/empleado", (req, res) => {
    db.query('SELECT * FROM Empleado',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.put("/updateses", (req, res) => {
    const Cedula = req.body.Cedula
    const Nombre = req.body.Nombre
    const Apellidos = req.body.Apellidos
    const Sueldo = req.body.Sueldo


    db.query('UPDATE Empleado SET Cedula=?,Nombre=?,Apellidos=?,Sueldo=? ', [Cedula, Nombre, Apellidos, Sueldo],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("actualizacio echo")
            }
        }
    );
});

app.delete("/deleteses/:Cedula", (req, res) => {
    const Cedula = req.params.Cedula
    console.log('se fue ')
    db.query('DELETE FROM Empleado WHERE Cedula = ?', [Cedula],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("se eliminó melo")
            }
        })
})



app.post("/createsese", (req, res) => {
    const Fecha = req.body.Fecha
    const Cantidad = req.body.Cantidad
    const Descripcion = req.body.Descripcion
    const Costo_uni = req.body.Costo_uni
    const CostoTotal = req.body.CostoTotal

    db.query('INSERT INTO Siscostos (Fecha,Cantidad,Descripcion,Costo_uni,CostoTotal) VALUES(?,?,?,?,?)', [Fecha, Cantidad, Descripcion, Costo_uni, CostoTotal],
        (err, result) => {
            if (err) {
                console.log("err");
            } else {
                res.send("registro echo")
            }
        }
    );
});

app.get("/siscostos", (req, res) => {
    db.query('SELECT * FROM Siscostos',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.put("/updatesese", (req, res) => {
    const ID_siscostos = req.body.ID_siscostos
    const Fecha = req.body.Fecha
    const Cantidad = req.body.Cantidad
    const Descripcion = req.body.Descripcion
    const Costo_uni = req.body.Costo_uni
    const CostoTotal = req.body.CostoTotal


    db.query('UPDATE Siscostos SET Fecha=?,Cantidad=?,Descripcion=?,Costo_uni=?,CostoTotal=? WHERE ID_siscostos=?', [Fecha, Cantidad, Descripcion, Costo_uni, CostoTotal, ID_siscostos],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("actualizacio echo")
            }
        }
    );
});

app.delete("/deletesese/:ID_siscostos", (req, res) => {
    const ID_siscostos = req.params.ID_siscostos
    console.log('se fue ')
    db.query('DELETE FROM Siscostos WHERE ID_siscostos = ?', [ID_siscostos],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("se eliminó melo")
            }
        })
})



app.post("/createseses", (req, res) => {
    const Fecha = req.body.Fecha
    const Detalle = req.body.Detalle
    const ComDia = req.body.ComDia
    const Debe = req.body.Debe
    const Haber = req.body.Haber
    const Saldo = req.body.Saldo

    db.query('INSERT INTO Librocont (Fecha,Detalle,ComDia,Debe,Haber,Saldo) VALUES(?,?,?,?,?,?)', [Fecha, Detalle, ComDia, Debe, Haber, Saldo],
        (err, result) => {
            if (err) {
                console.log("err");
            } else {
                res.send("registro echo")
            }
        }
    );
});

app.get("/librocont", (req, res) => {
    db.query('SELECT * FROM Librocont',
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.put("/updateseses", (req, res) => {
    const ID_librocont = req.body.ID_librocont
    const Fecha = req.body.Fecha
    const Detalle = req.body.Detalle
    const ComDia = req.body.ComDia
    const Debe = req.body.Debe
    const Haber = req.body.Haber
    const Saldo = req.body.Saldo

    db.query('UPDATE Librocont SET Fecha=?,Detalle=?,ComDia=?,Debe=?,Haber=?,Saldo=? WHERE ID_librocont=?', [Fecha, Detalle, ComDia, Debe, Haber, Saldo, ID_librocont],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("actualizacio echo")
            }
        }
    );
});

app.delete("/deleteseses/:ID_librocont", (req, res) => {
    const ID_librocont = req.params.ID_librocont
    console.log('se fue ')
    db.query('DELETE FROM Librocont WHERE ID_librocont = ?', [ID_librocont],
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("se eliminó melo")
            }
        })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM  Admin WHERE Nombre=? AND Contraseña=?";
    db.query(sql, [req.body.Nombre, req.body.Contraseña], (err, data) => {
        if (err) return res.json("login failed");
        if (data.length > 0) {
            return res.json("inicio sesion")
        } else {
            return res.json("no fue posible ingresar")
        }
    })
})