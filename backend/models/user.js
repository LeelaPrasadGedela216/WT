const mongoose=require("mongoose");
const passport = require("passport");


const userSchema= new mongoose.Schema({
  name:{type:String ,required:true},
  email:{type:String,required:true , unique:true},
  password:{type:String ,required:true},
  cartData:{type:Object, default:{}}
},{minimize:false,timestamps: true });

const User= mongoose.models.user || mongoose.model("user",userSchema);
module.exports=User