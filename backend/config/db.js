const mongoose= require("mongoose");
require("dotenv").config()
const connectDB= async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    });
    console.log("MongoDB Connected Successfully ....!")
  }catch(error){
    console.log("Failed to connect : " ,error.message)
    process.exit(1);
  }
}
module.exports=connectDB;