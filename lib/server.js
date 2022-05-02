const express = require("express");

const app = express();

const port = 3000;


app.get('/',(request, response)=>{
    response.send('Hola VisualPartners API');
})


app.listen(port,()=>{
    console.log(`App escuchando en el puerto ${port}`);
})

