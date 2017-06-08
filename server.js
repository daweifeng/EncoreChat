const express = require('express');
const app = express();
var http = require('http').createServer(app);
const routes = require('./routes/routes');
const IoController = require('./controller/ioController');

routes(app);

const server = app.listen(process.env.PORT || 8080, err => console.log(err || `Listening on 8080`));
const io = require('socket.io').listen(server);

IoController(io);
