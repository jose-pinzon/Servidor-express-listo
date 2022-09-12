const express = require('express')
const cors = require('cors')

class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/user'


        //midlewares
        this.middlewares()
        //rutas de la aplicacion
        this.routes()
    }


    middlewares(){
        //CORS
        this.app.use(cors())

        //Parseo y lectura del body
        this.app.use(express.json())

        this.app.use( express.static('public'))
    }
 
    routes(){
        // Usar un middleware
        this.app.use(this.usuariosPath, require('../routes/user'))

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendon en el puerto', this.port);
        })
    }


}


module.exports = Server