const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();
const protectAdmin = async (req, res, next) => {
  try {
    const token = req.headers["token"]||req.headers.token;
  
    if (!token) {
      res.json({
        success: false,
        message: "Error in Authentication .... Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
   
    if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      res.json({
        success: false,
        message: "Error in Authentication .... Login Again  Error ",
      });
    }
    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Error in Authentication .... Login Again  Error ",
      error,
    });
  }
};
module.exports=protectAdmin;