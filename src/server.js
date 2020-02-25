const express = require("express");
const apis = require("./apis");
const environment = require("./config/environments");

const app = express();
const port = environment.PORT;

app.use("/api", apis);

const server = app.listen(port, () => console.log("Serveur accessible sur le port " + port + "."));

export default server;