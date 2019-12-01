'use strict';

let socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
})

socket.on('disconnect', () => {
    console.log('Perdimos conexión con el servidor');
});


socket.emit('enviarMensaje', {
    nombre: 'Juan',
    mensaje: 'De cliente a servidor'
}, (res) => {
    console.log(res);
});
socket.on('enviarMensaje', console.log)