const express = require("express");
const server = express();
const routes = require("./routes");

server.use(express.urlencoded({ extended: true}));
server.use(express.static("public"));
server.use(routes);


server.listen(5000, function(){
    console.log("Server is running!");
});