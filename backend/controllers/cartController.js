const User = require("../models/user");

exports.addToCart = async (req, res) => {
  try {
   
    const { _id, name, selectedSize } = req.body;

    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
   
    let cartData = user.cartData || {};

    if (!cartData[name]) {
      cartData[name] = {};
      
    }

    cartData[name][selectedSize] = (cartData[name][selectedSize] || 0) + 1;
    

    await User.findByIdAndUpdate(_id, { $set: { cartData } });


    return res.status(200).json({success:true, message: "Item added to cart successfully.", cartData });
  } catch (error) {
    console.error("Error adding to cart:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
   
    const { _id, name, selectedSize } = req.body;

    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
   
    let cartData = user.cartData ;

    if (!cartData[name] || !cartData[name][selectedSize]) {
      return res.status(400).json({ message: "Item not found in the cart." });
    }

 
    delete cartData[name][selectedSize];


    if (Object.keys(cartData[name]).length === 0) {
      delete cartData[name];
    }

    await User.findByIdAndUpdate(_id, { $set: { cartData } });


    return res.status(200).json({success:true, message: "Item removed from  cart successfully.", cartData });
  } catch (error) {
    console.error("Error in removing from  cart:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};



exports.updateCart = async (req, res) => {
  try {

    console.log("Update controller enterd")
    const { _id, name, selectedSize, quantity } = req.body;
  console.log("request body :",req.body);
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    let cartData = user.cartData ; 
    console.log("user found his cart data :",user.cartData);
    if (!cartData[name]) {
      cartData[name] = {};
    }
    const quantity_num=Number(quantity)
    cartData[name][selectedSize] = quantity_num;
    

    await User.findByIdAndUpdate(_id, { $set: { cartData } });
    console.log("after update :" ,user.cartData)

    return res.status(200).json({success:true, message: "Cart updated successfully.", cartData });
  } catch (error) {
    console.error("Error updating cart:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};

exports.getUserCart = async (req, res) => {
  try {
    const { _id } = req.body;

    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const products = user.cartData || {}; 

    return res.status(200).json({ success: true, products });
  } catch (error) {
    console.error("Error fetching user cart:", error);
    return res.status(500).json({ message: "Internal server error." });
  }
};
