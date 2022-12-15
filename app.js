const express = require('express');
const path = require("path");
const app = express ();

let port = process.env.PORT || 3000;

app.use(express.static("public"));//nos indica donde estan los archivos publicos y estaticos

app.listen (port, ( )=> console.log ("Servidor escuchando puerto"));

app.get('/',(req, res) => { // '/' me especifica q es la pagina indice
    res.sendFile(path.resolve(__dirname, './views/home.html'));//path.nos permite enviar cualquier tipo de archivo al navegador
})
app.get("/register", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/views/register.html"));
});

app.get("/login", (req,res) => {
    res.sendFile(path.resolve(__dirname + "/views/login.html"));
});