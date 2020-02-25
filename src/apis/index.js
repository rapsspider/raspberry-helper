import GarageRouter from "./garage";
const Router = require("express").Router();

Router.use('/garage', GarageRouter);

module.exports = Router;