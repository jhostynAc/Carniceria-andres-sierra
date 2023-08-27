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
    database:"comprobante"
})

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre
    const cargo = req.body.cargo
    const edad = req.body.edad

    db.query('INSERT INTO hola(nombre,cargo,edad) VALUES(?,?,?)',[nombre,cargo,edad],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("registro echo")
        }
    }
    );
});

app.get("/hola",(req,res)=>{
    db.query('SELECT * FROM hola',
    (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});


app.put("/update",(req,res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const cargo = req.body.cargo;   
    const edad = req.body.edad;

    db.query('UPDATE hola SET nombre=?,cargo=?,edad=? WHERE id=?',[nombre,cargo,edad,id],
    (err,result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("actualizacio echo")
        }
    }
    );
});

app.listen(3005,()=>{
    console.log("corriendo");
})