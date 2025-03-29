
const Product=require("../models/product");
const user=require("../models/user")
const { v2: cloudinary } = require("cloudinary");
exports.addProduct=async (req,res)=>{
    try{

        
        const {name,description,price,category,subCategory,sizes,bestseller}=req.body;

       
        const image1=req?.files?.image1?.[0]
        const image2=req?.files?.image2?.[0]
        const image3=req?.files?.image3?.[0]
        const image4=req?.files?.image4?.[0]

       const  images=[image1,image2,image3,image4].filter((item)=>item!==undefined);


       const imagesUrl = await Promise.all(
        images.map(async (item)=>{
            const response=await cloudinary.uploader.upload(item.path,{resource_type:"image"});
            return response.secure_url;
        })
       );


        console.log(name,description,price,category,subCategory,sizes,bestseller);
        console.log(imagesUrl);
        console.log(sizes);
        const productData={
            name:name,
            description:description,
            price:Number(price),
            category:category,
            subCategory:subCategory,
            bestseller:bestseller==="true"?true:false,
            sizes: JSON.parse(sizes),//converting string into arra
            image:imagesUrl,
            date:Date.now()
        }

         await Product.create(productData);

        console.log("product added successfully");


        res.json({success:true,message:"Product added succesfully"})
        
    }catch(error){
        console.error("Error adding product:", error);
        res.status(500).json({
            success: false,
            message: "Failed to add product!",
            error: error.message
        });
    }

}
exports.removeProduct=async(req,res)=>{
    try{

        await Product.findByIdAndDelete(req.body._id);
        res.json({message:"Product removed Successfully..!"})

    }catch(error){
        console.error("Error removing product:", error);
        res.status(500).json({
            success: false,
            message: "Failed to remove product!",
            error: error.message
        });
    }

}
exports.listProducts=async(req,res)=>{
    try{

        const products=await Product.find({});
        res.json({success:true,products:products});

    }catch(error){
        console.error("Error in retrieving productslist:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve productlist!",
            error: error.message
        });
    }

}
exports.singleProduct=async(req,res)=>{

    try{

        const product=await Product.findById(req.body._id);
        res.json({success:true,product_details:product});

    }catch(error){
        console.error("Error retrieve  product:", error);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve product!",
            error: error.message
        });
    }

}