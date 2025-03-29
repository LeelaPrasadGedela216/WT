const mongoose=require("mongoose");

const orderSchema = new mongoose.Schema({
    _id:{type:String, required:true},
    items:{type:Array,required:true},
    amount:{type:Number ,required:true},
    address:{type:Object,required:true},
    status:{type:String,required:true,default:'Order Placed'},
    paymentMethod:{type:String,required:true, default:'COD'},
    payment:{type:Boolean,required:true,default:false},
    date:{type:Number,required:true}
});

const Order=mongoose.models.orders|| mongoose.model('orders',orderSchema);

module.exports=Order;