require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("Petición recibida")
    res.send("<h1 style:color-text=red >Ojalá sean tities</h1>")
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Escuchando por el puerto ${PORT}`)
})
