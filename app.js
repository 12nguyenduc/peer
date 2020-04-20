const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

// peerjs
const peerServer = ExpressPeerServer(server, {
    proxied: true,
    path: "/"
});
app.use("/peerjs", peerServer);

const PORT = process.env.PORT || 5000;
server.listen(PORT);

module.exports = app;
