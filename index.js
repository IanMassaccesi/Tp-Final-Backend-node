/*--------SERVIDOR ESTATICO CON EXPRESS-------*/
let port = 3000;
const express = require('express');
const app = express();
const path = require('path');// para trabajar con rutas de archivos y directorios
const usuariosRouter = require('./routes/usuarios');
const cors = require('cors');




app.use(cors());
app.use(express.json());
app.use('/usuarios',usuariosRouter);
// voy a usar el middleware de express para servir archivos estaticos
// que devuelva los archivos de la carpeta public
app.use(express.static(path.join(__dirname,'public')));


//AGREGADO DE MULTER
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/usuarios', express.static(path.join(__dirname, 'usuarios')));

app.listen(port , () => 
{
    console.log(`Servidor ejecutandose en el puerto ${port}`)
});

