
const mongoose = require('mongoose');//Constante que instala los módulos de moongose para la base de datos de mongoDB
//Conección con  la base de datos de MongoDB

const dbConnect = (app) => {
    mongoose
        .connect(`mongodb+srv://Hollsann:${process.env.MONGO_DB_PASS}@development.ngqbc.mongodb.net/Stock-App?retryWrites=true&w=majority`
        ).then((result) => {
            const PORT = process.env.PORT

            app.listen(PORT, () => {
                console.log(`Servidor escuchando en el puerto ${PORT}`)
            })
            console.log('Conexión exitosa con la BBDD')
        })
        .catch((err) => console.log(err))

}

module.exports = dbConnect