const {Router} = require("express");

const {getWomensProducts,getWomensProductById,postWomensProducts} = require("../controller/womens.controller")

const womensRouter = Router();

womensRouter.get("/",getWomensProducts);

womensRouter.get("/:womensId",getWomensProductById);

womensRouter.post("/addwomensProduct",postWomensProducts);

module.exports = {womensRouter};