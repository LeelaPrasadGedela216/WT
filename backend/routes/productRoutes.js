const express=require("express");
const {addProduct,removeProduct,listProducts,singleProduct} =require("../controllers/productController")
const upload=require("../middleware/multer");
const adminProtect=require("../middleware/adminMiddleware")
const router=express.Router();

router.post("/add",adminProtect,upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]),addProduct);
router.post("/remove",adminProtect,removeProduct);
router.post("/single",singleProduct);
router.get("/list",listProducts);

module.exports=router;