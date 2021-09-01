const express = require("express");
const routes = express.Router();

const CartController = require("../app/controllers/CartController");

const { onlyUsers } = require("../app/middlewares/session");

routes.get("/", onlyUsers, CartController.index );
routes.post("/:id/add-one", onlyUsers, CartController.addOne );
routes.post("/:id/remove-one", onlyUsers, CartController.removeOne );
routes.post("/:id/delete", onlyUsers, CartController.delete );

module.exports = routes;