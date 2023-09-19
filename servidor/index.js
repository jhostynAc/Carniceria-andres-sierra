const express = require("express");
const app = express();
const mysql =require("mysql");
const cors =require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"andres_sierra"
})

app.post("/create",(req,res)=>{
    const ID_proveedor = req.body.ID_proveedor
    const Empresa = req.body.Empresa
    const Telefono = req.body.Telefono

    db.query('INSERT INTO proveedor(ID_proveedor,Empresa,Telefono) VALUES(?,?,?)',[ID_proveedor,Empresa,Telefono],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("registro echo")
        }
    }
    );
});

app.get("/proveedor",(req,res)=>{
    db.query('SELECT * FROM proveedor',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.put("/update",(req,res)=>{
    const ID_proveedor = req.body.ID_proveedor
    const Empresa = req.body.Empresa
    const Telefono = req.body.Telefono

    db.query('UPDATE proveedor SET ID_proveedor=?,Empresa=?,Telefono=?' ,[ID_proveedor,Empresa,Telefono],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.delete("/delete/:ID_proveedor",(req,res)=>{
    const ID_proveedor = req.params.ID_proveedor
    console.log('se fue ')
    db.query('DELETE FROM proveedor WHERE ID_proveedor  = ?',[ID_proveedor],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("se eliminó melo")
        }
    })
})

app.listen(3005,()=>{
    console.log("corriendo");
})

app.post("/crear",(req,res)=>{
    const ID_Producto = req.body.ID_Producto
    const Imagen = req.body.Imagen
    const Nombre = req.body.Nombre
    const Precio = req.body.Precio
    const Tipo = req.body.Tipo
    const ID_proveedor = req.body.ID_proveedor

    db.query('INSERT INTO Producto(ID_Producto,Nombre,Precio,Tipo,ID_proveedor,Imagen) VALUES(?,?,?,?,?,?)',[ID_Producto,Nombre,Precio,Tipo,ID_proveedor,Imagen],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("registro echo")
        }
    }
    );
});

app.get("/Producto",(req,res)=>{
    db.query('SELECT * FROM Producto',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.put("/actualizar",(req,res)=>{
    const ID_Producto = req.body.ID_Producto
    const Imagen = req.body.Imagen
    const Nombre = req.body.Nombre
    const Precio = req.body.Precio
    const Tipo = req.body.Tipo
    const ID_proveedor = req.body.ID_proveedor

    db.query('UPDATE Producto SET ID_Producto=?,Nombre=?,Precio=?,Tipo=?,ID_proveedor=?,Imagen=?' ,[ID_Producto,Nombre,Precio,Tipo,ID_proveedor,Imagen],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.delete("/borrar/:ID_Producto",(req,res)=>{
    const ID_Producto = req.params.ID_Producto
    console.log('se fue ')
    db.query('DELETE FROM Producto WHERE ID_Producto  = ?',[ID_Producto],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("se eliminó melo")
        }
    })
})
app.post("/creates",(req,res)=>{
    const Nombre = req.body.Nombre
    const Direccion = req.body.Direccion
    const Telefono = req.body.Telefono
    const CorreoElectronico = req.body.CorreoElectronico

    db.query('INSERT INTO Cliente (Nombre,Direccion,Telefono,CorreoElectronico) VALUES(?,?,?,?)',[Nombre,Direccion,Telefono,CorreoElectronico],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("registro echo")
        }
    }
    );
});

app.get("/cliente",(req,res)=>{
    db.query('SELECT * FROM Cliente',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.put("/updates",(req,res)=>{
    const ID_Cliente =req.body.ID_Cliente
    const Nombre = req.body.Nombre
    const Direccion = req.body.Direccion
    const Telefono = req.body.Telefono
    const CorreoElectronico = req.body.CorreoElectronico

    db.query('UPDATE Cliente SET Nombre=?,Direccion=?,Telefono=?,CorreoElectronico=? WHERE ID_Cliente=?' ,[Nombre,Direccion,Telefono,CorreoElectronico,ID_Cliente],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.delete("/deletes/:ID_Cliente",(req,res)=>{
    const ID_Cliente = req.params.ID_Cliente
    console.log('se fue ')
    db.query('DELETE FROM Cliente WHERE ID_Cliente = ?',[ID_Cliente],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("se eliminó melo")
        }
    })
})

app.post("/createse",(req,res)=>{
    const Fecha = req.body.Fecha
    const  Total= req.body.Total
    const ID_Cliente = req.body.ID_Cliente

    db.query('INSERT INTO Factura (Fecha,Total,ID_Cliente) VALUES(?,?,?)',[Fecha,Total,ID_Cliente],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("registro echo")
        }
    }
    );
});

app.get("/factura",(req,res)=>{
    db.query('SELECT * FROM Factura',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.put("/updatese",(req,res)=>{
    const ID_Factura = req.body.ID_Factura
    const Fecha = req.body.Fecha
    const  Total= req.body.Total
    const ID_Cliente = req.body.ID_Cliente

    db.query('UPDATE Factura SET Fecha=?,Total=?,ID_Cliente=? WHERE ID_Factura' ,[Fecha,Total,ID_Cliente,ID_Factura],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.delete("/deletese/:ID_Factura",(req,res)=>{
    const ID_Factura = req.params.ID_Factura
    console.log('se fue ')
    db.query('DELETE FROM Factura WHERE ID_Factura = ?',[ID_Factura],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("se eliminó melo")
        }
    })
})



app.post("/creare",(req,res)=>{
    const ID_Factura = req.body.ID_Factura
    const  ID_Producto= req.body.ID_Producto
    const Cantidad = req.body.Cantidad

    db.query('INSERT INTO DetalleFactura (ID_Factura,ID_Producto,Cantidad) VALUES(?,?,?)',[ID_Factura,ID_Producto,Cantidad],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("registro echo")
        }
    }
    );
});

app.get("/DetalleFactura",(req,res)=>{
    db.query('SELECT * FROM DetalleFactura',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.put("/actualizare",(req,res)=>{
    const ID_Detalle = req.body.ID_Detalle
    const ID_Factura = req.body.ID_Factura
    const  ID_Producto= req.body.ID_Producto
    const Cantidad = req.body.Cantidad

    db.query('UPDATE DetalleFactura SET ID_Factura=?,ID_Producto=?,Cantidad=? WHERE ID_Detalle=?' ,[ID_Factura,ID_Producto,Cantidad,ID_Detalle],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.delete("/borrare/:ID_Detalle",(req,res)=>{
    const ID_Detalle = req.params.ID_Detalle
    console.log('se fue ')
    db.query('DELETE FROM DetalleFactura WHERE ID_Detalle = ?',[ID_Detalle],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send("se eliminó melo")
        }
    })
})
