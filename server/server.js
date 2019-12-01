const express = require('express');
const colors = require('colors/safe')
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000;

//path de public
const pathPublic = path.resolve(__dirname, '../public');




const app = express();
app.use(express.static(pathPublic));


let server = http.createServer(app);
module.exports.io = socketIO(server);
require('./sockets/socket');




server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(colors.yellow(`El servidor esta corriendo en el puerto ${port}`));
});