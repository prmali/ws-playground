"use strict";
exports.__esModule = true;
var mod_ts_1 = require("https://deno.land/x/websocket@v0.1.2/mod.ts");
var wss = new mod_ts_1.WebSocketServer(8080);
wss.on("connection", function (ws) {
    ws.on("message", function (message) {
        console.log(message);
        ws.send(message);
    });
});
