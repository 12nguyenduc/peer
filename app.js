const http = require( "http");
const express = require( "express");
const ExpressPeerServer = require("peer").ExpressPeerServer;

const app = express();
const server = http.createServer(app);

// peerjs
const peerServer = ExpressPeerServer(server, {
    proxied: true,
    path: "/"
});
app.use("/peerjs", peerServer);

const PORT = process.env.PORT || 5000;
server.listen(PORT);
