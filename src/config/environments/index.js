
const ENV = process.env.NODE_ENV || "production";
const develop = require("./develop");
const production = require("./production");

module.exports = Object.assign({
  PORT: process.env.PORT || 3000
}, ENV === "production" ? production : develop);