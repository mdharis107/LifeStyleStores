const {Router} = require("express");

const {getKidProducts,getKidProductById,postKidProducts} = require("../controller/kids.controller")

const kidRouter = Router();

kidRouter.get("/",getKidProducts);

kidRouter.get("/:kidId",getKidProductById);

kidRouter.post("/addKidProduct",postKidProducts);

module.exports = {kidRouter};