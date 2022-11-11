const {Router} = require("express");

const {getBeautyProducts,getBeautyProductById,postBeautyProducts} = require("../controller/beauty.controller")

const beautyRouter = Router();

beautyRouter.get("/",getBeautyProducts);

beautyRouter.get("/:womensId",getBeautyProductById);

beautyRouter.post("/addwomensProduct",postBeautyProducts);

module.exports = {beautyRouter};