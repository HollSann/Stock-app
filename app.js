const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("Petición recibida")
    res.send("<h1>Hola Ju, cómo estás? todo viento ?</h1>")
})

app.listen(4000,()=>{
    console.log("Escuchando en el puerto 4000")
})
