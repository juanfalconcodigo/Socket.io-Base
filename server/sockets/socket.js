const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');


    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    client.on('enviarMensaje', (mensaje, callback) => {
        /* if (mensaje.nombre) {
            callback('Válido')
        } else {
            callback('Inválido')
        } */
        console.log(mensaje);
        client.broadcast.emit('enviarMensaje', mensaje);
    });

    client.emit('enviarMensaje', {
        nombre: 'Servidor',
        mensaje: 'De servidor a cliente'
    })

});