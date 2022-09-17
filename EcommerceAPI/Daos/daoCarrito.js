const Contenedor = require("../contenedor/contenerdorMongo.js");
const mongoDbUri = require("../config/mongoConfig.js");

const carritoDao = new Contenedor(mongoDbUri, "proyecto", "carritos");

module.exports = carritoDao;
