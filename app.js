import * as http from "http";
import express from "express";
import { ExpressPeerServer } from "peer";

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


module.exports = app;
