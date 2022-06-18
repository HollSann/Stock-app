const Product = require('../models/product')


const getProducts = async (req, res) => {
    const products = await Product.find() //método para obtener todos los productos

    res.status(200).json({ ok: true, data: products })
}

const createProduct = (req, res) => {

    if (!req.body.name) {
        res.status(400).json({
            ok: false,
            message: 'El campo Nombre del producto es obligatorio'
        })
        return
    }

    const newProduct = new Product(req.body)
    //Esperar a que se envien los datos con promesas
    newProduct
        .save()
        .then(result => { //si todo se envio correctamente 
            res.status(201).json({ ok: true })
        }).catch((err) => console.log(err))

}

module.exports = {
    getProducts,
    createProduct,
}