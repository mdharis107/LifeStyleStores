const {Router} = require("express");

const {getShoesAndBagsProducts,getShoesAndBagsProductById,postShoesAndBagsProducts} = require("../controller/shoes&bags.controller")

const ShoesAndBagsRouter = Router();

ShoesAndBagsRouter.get("/",getShoesAndBagsProducts);

ShoesAndBagsRouter.get("/:ShoesAndBagsId",getShoesAndBagsProductById);

ShoesAndBagsRouter.post("/addShoesAndBagsProduct",postShoesAndBagsProducts);

module.exports = {ShoesAndBagsRouter};