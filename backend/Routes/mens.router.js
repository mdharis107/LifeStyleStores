const {Router} = require("express");

const {getMenProducts,getMenProductById,postMenProducts} = require("../controller/mens.controller")

const menRouter = Router();

menRouter.get("/",getMenProducts);

menRouter.get("/:menId",getMenProductById);

menRouter.post("/addMenProduct",postMenProducts);

module.exports = {menRouter};