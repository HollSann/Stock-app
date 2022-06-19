require('dotenv').config()
const express = require('express')
const dbConnect = require('./db')
const cors = require('cors');

const productRouter = require('./routes/product')
const app = express()

dbConnect(app);
app.use(cors({ origin: true }))



app.use(express.json()) //usa un midleware que afecta todas las rutas, cuando se envien archivos de tipo jSON(es un método del objeto express)

app.use('/api/v1/products', productRouter)
