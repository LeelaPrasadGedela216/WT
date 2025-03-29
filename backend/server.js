const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors");
const passport=require("passport");
const session =require("express-session");
const connectDB=require("./config/db")
const connectCloudinary=require("./config/cloudinary")
const authRoutes=require("./routes/authRoutes");
const productRoutes=require("./routes/productRoutes");
const cartRoutes=require("./routes/cartRoutes");
const orderRoutes=require("./routes/orderRoutes");
require("./passportConfig");
dotenv.config();

connectDB();

connectCloudinary();

const  app= express();
app.use(express.json());
app.use(cors({
  origin:"*",
  credentials:true
}))

app.use(session({
  secret:"mysecret",
  resave:false,
  saveUninitialized:false
}))

app.use(passport.initialize());

app.use(passport.session());


app.use("/auth",authRoutes);
app.use("/product",productRoutes);
app.use("/cart",cartRoutes);
app.use("/orders",orderRoutes);

const PORT =process.env.PORT || 5000;
app.listen(PORT, ()=>{console.log(`Server is running at port ${PORT}`)});