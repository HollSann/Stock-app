const { number } = require('mathjs');
const mongoose = require('mongoose')


//esquema para que mongoose chequee antes de almacenr el contenido a una colección
const productSchema = mongoose.Schema(
    {  //Dentro de este método de mongoose recibe es un objeto de configuración
        //con la clausula require se asegura que el campo debe ser obligatoriamente de un tipo específico
        name: { type: String, require: true },
        price: Number,
    },
    { timestamps: true } //Automaticamente cuando se cree un registro, se crearan dos campos más, el de created add(fecha en que se crea tal registro) y el update add(cuando se actualizó el registro)
)
//Creación de modelo para poder interactuar con la colección a través de un montón de método que provee mongoose
const Product = mongoose.model('Product', productSchema)


module.exports = Product; 