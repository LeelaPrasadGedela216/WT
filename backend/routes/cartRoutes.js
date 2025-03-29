const express=require("express");
const router=express.Router();
const userMiddleware=require("../middleware/cartMiddleware");
const {addToCart,updateCart,getUserCart,removeFromCart}=require("../controllers/cartController")
router.post("/add",userMiddleware,addToCart);
router.post("/update",userMiddleware,updateCart);
router.post("/get",userMiddleware,getUserCart);
router.post("/remove",userMiddleware,removeFromCart);
module.exports=router;