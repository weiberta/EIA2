"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
// SERVER
var Coronahilfe;
(function (Coronahilfe) {
    let server = Http.createServer();
    console.log(server);
    //
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest() {
        console.log("mrow.");
    }
})(Coronahilfe = exports.Coronahilfe || (exports.Coronahilfe = {}));
//# sourceMappingURL=NodeAPI.js.map