

const socket = io();

const lblonline = document.querySelector('#lblonline');
const lbloffline = document.querySelector('#lbloffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');

socket.on ('connect', () => {
    lblonline.style.display = '';
    lbloffline.style.display = 'none';
});

socket.on ('disconnect', () => {
    lblonline.style.display = 'none';
    lbloffline.style.display = '';
});

socket.on('enviar-mensaje', (payload) =>{
    console.log(payload);
});

btnEnviar.addEventListener ('click', () =>{

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123abc',
        fecha: new Date()
    }

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el server', id);
    });

});