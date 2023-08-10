const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"andres_sierra"
})
app.post("/create",(req,res)=>{
    const Cedula = req.body.Cedula;
    const Nombre = req.body.Nombre;
    const Apellidos = req.body.Apellidos;
    const Edad = req.body.Edad;
    const cargo = req.body.cargo;
    const sueldo = req.body.sueldo;
    
    db.query('INSERT INTO empleado(Cedula,Nombres,Apellidos,Cargo,Sueldo,Edad) VALUES(?,?,?,?,?,?)',[Cedula,Nombre,Apellidos,cargo,sueldo,Edad]);
})
app.listen(3001,()=>{
    console.log("corriendo en el puerto 3001")
})