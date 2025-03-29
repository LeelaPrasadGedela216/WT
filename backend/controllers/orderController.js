const Order=require("../models/order");
const User=require("../models/user")
exports.placeOrder=async(req,res)=>{

   try{
    const {_id,items,amount,address}=req.body;
    const orderData={
        _id:_id,
        items:items,
        amount:amount,
        address:address,
        paymentMethod:'COD',
        payment:false,
        date:Date.now()
    }
    const order=await Order.create(orderData);
    await User.findByIdAndUpdate(_id,{cartData:{}});
    res.status(201).json({message:"Order Place successfully..!",success:true});
   }catch(error){
    res.status(500).json({message:"Failed to place Order..!",success:false});
   }

}

exports. placeOrderStripe=async(req,res)=>{

}

exports.placeOrderRazorpay=async(req,res)=>{

}

exports.allOrders=async(req,res)=>{

}

exports.userOrders=async(req,res)=>{

}

exports.updateStatus=async(req,res)=>{

}


