

const socketController = (socket => {

    console.log('Cliente Conectado: ', socket.id);

    socket.on ('disconnect', () =>{
        console.log ('Cliente Desconectado: ', socket.id);
    });
    
    
    socket.on('enviar-mensaje', (payload, callback) => {

        const id = payload.id;
        callback (id);
        console.log (id,payload);
        socket.broadcast.emit ('enviar-mensaje', payload);

    }); 

  });





module.exports = {
    socketController
}