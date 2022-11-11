const {Router} = require("express");

const {getBeautyProducts,getBeautyProductById,postBeautyProducts} = require("../controller/beauty.controller")

const beautyRouter = Router();

beautyRouter.get("/",getBeautyProducts);

beautyRouter.get("/:beautyId",getBeautyProductById);

beautyRouter.post("/addBeautyProduct",postBeautyProducts);

module.exports = {beautyRouter};