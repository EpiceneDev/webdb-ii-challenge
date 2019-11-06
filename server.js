const express = require("express");
const helmet = require("helmet");
//const logger = require("./middleware/logger.js");
const CarsRouter = require("./cars/carsRouter.js");
const server = express();

server.use(express.json());
server.use(helmet);

server.use("/api/cars", CarsRouter);

server.get("/", (req, res) => {
  res.send("<h3>DB INTRO PROJECT II</h3>");
});

module.exports = server;