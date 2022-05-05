const express = require("express");
const { fruitRoutes } = require("./routes/Router");

const server = express();

server.use(express.json());

server.use("/frutas", fruitRoutes);

server.listen(3333);
