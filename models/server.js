
const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');
require ('dotenv').config();

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);
        this.path = {};
        
        //conectar a la base de datos
        
        //middleware
        this.middleware();
        
        //rutas de la aplicacion
        this.routes();

        this.sockets();
    }

    middleware(){

        //uso de cors
        this.app.use(cors());

        //directorio publico
        this.app.use(express.static ('public'));
    }

    routes(){

    }

    sockets(){

        this.io.on('connection',socketController)

    }

    listen(){
            this.server.listen(this.port, () =>{
            console.log('Aplicación corriendo en el puerto:', this.port);
        });

    }
}

module.exports  = Server;