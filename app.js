require('dotenv').config()
const express = require('express')
const path = require('path') //módulo nativo de node.js para no tener inconvenientes con linux
const mongoose = require('mongoose');//Constante que instala los módulos de moongose para la base de datos de mongoDB
const app = express()


//Conección con  la base de datos de MongoDB
mongoose
    .connect(`mongodb+srv://Hollsann:${process.env.MONGO_DB_PASS}@development.ngqbc.mongodb.net/Stock-App?retryWrites=true&w=majority`)
    .then((result) => console.log('Conección exitosa a la BBDD'))
    .catch((err) => console.log(err))

//esquema para que mongoose chequee antes de almacenr el contenido a una colección
const productSchema = mongoose.Schema(
    {  //Dentro de este método de mongoose recibe es un objeto de configuración
        //con la clausula require se asegura que el campo debe ser obligatoriamente de un tipo específico
        name: { type: String, require: true },
        price: { type: Number, require: true },
    },
    { timestamps: true } //Automaticamente cuando se cree un registro, se crearan dos campos más, el de created add(fecha en que se crea tal registro) y el update add(cuando se actualizó el registro)
)
//Creación de modelo para poder interactuar con la colección a través de un montón de método que provee mongoose
const Product = mongoose.model('Product', productSchema)
app.use(express.json()) //usa un midleware que afecta todas las rutas, cuando se envien archivos de tipo jSON(es un método del objeto express)

app.post('/api/v1/products', (req, res) => {
    const newProduct = new Product({ //instaciación del objetocon esquema de mongoose
        name: req.body.name,
        price: req.body.price,
    })
    //Esperar a que se envien los datos con promesas
    newProduct.save().then(result => { //si todo se envio correctamente 
        res.status(201).json({ ok: true })
    }).catch((err) => console.log(err))

})

app.use(express.static(path.join(__dirname, 'public'))) //Ruta donde se encuentran los archivos estáticos y la unión de directorios



const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Escuchando por el puerto ${PORT}`)
})
