const StudentController = require("./controllers/StudentController");

const express = require("express");

const app = express();

const port = 3000;


app.get('/',(request, response)=>{
    response.send('Hola VisualPartners API');
})

//Creado el endpoint para consultar todos los estudiantes con todos sus campos.
app.get('/v1/students/',(request, response)=>{
    const students = StudentController.showAllStudents();
    response.json(students)
})

//Creado el endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
app.get('/v1/students/emails',(request, response)=>{
    const emails = StudentController.showEmailsCertified();
    response.json(emails)
})

//Creado y probado el endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
app.get('/v1/students/emails',(request, response)=>{
    const students500 = StudentController.showStudents500();
    response.json(students500)
})


app.listen(port,()=>{
    console.log(`App escuchando en el puerto ${port}`);
})

