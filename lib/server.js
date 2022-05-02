const StudentController = require("./controllers/StudentController");

const express = require("express");

const app = express();

const port = 3000;


app.get('/',(request, response)=>{
    response.send('Hola VisualPartners API');
})

//Creado el endpoint para consultar todos los estudiantes con todos sus campos.
app.get('/v1/students/',(request,response)=>{
    const students = StudentController.showAllStudents();
    response.json(students)
})


app.listen(port,()=>{
    console.log(`App escuchando en el puerto ${port}`);
})

