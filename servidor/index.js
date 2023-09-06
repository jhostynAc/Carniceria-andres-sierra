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
    const id_proveedor = req.body.id_proveedor
    const Empresa = req.body.Empresa
    const Telefono = req.body.Telefono

    db.query('INSERT INTO proveedor(id_proveedor,Empresa,Telefono) VALUES(?,?,?)',[id_proveedor,Empresa,Telefono],
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
    const id_proveedor = req.body.id_proveedor
    const Empresa = req.body.Empresa
    const Telefono = req.body.Telefono

    db.query('UPDATE proveedor SET id_proveedor=?,Empresa=?,Telefono=?' ,[id_proveedor,Empresa,Telefono],
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.delete("/delete/:id_proveedor",(req,res)=>{
    const id_proveedor = req.params.id_proveedor
    console.log('se fue ')
    db.query('DELETE FROM proveedor WHERE id_proveedor  = ?',[id_proveedor],
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