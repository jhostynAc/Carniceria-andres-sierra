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
    const Cedula = req.body.Nit_empresa
    const Nombre = req.body.Nombre
    const Apellidos = req.body.Apellidos
    const Correo = req.body.Correo
    const Contraseña =req.body.Contraseña
    const Nit_proveedor = req.body.Nit_proveedor

    db.query('INSERT INTO admin(Cedula,Nombre,Apellidos,Correo,Contraseña,Nit_proveedor) VALUES(?,?,?,?,?,)',[Cedula,Nombre,Apellidos,Correo,Contraseña,Nit_proveedor],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("registro echo")
        }
    }
    );
});

app.get("/andres_sierra",(req,res)=>{
    db.query('SELECT * FROM admin',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.put("/update",(req,res)=>{
    const Cedula = req.body.Nit_empresa
    const Nombre = req.body.Nombre
    const Apellidos = req.body.Apellidos
    const Correo = req.body.Correo
    const Contraseña =req.body.Contraseña
    const Nit_proveedor = req.body.Nit_proveedor

    db.query('UPDATE admin SET Cedula=?,Nombre=?,Apellidos=?,Correo=?,Contraseña=?,Nit_proveedor WHERE id=?',[Cedula,Nombre,Apellidos,Correo,Contraseña,Nit_proveedor],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id
    console.log(id)
    db.query('DELETE FROM admin WHERE id = ?',[id],
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