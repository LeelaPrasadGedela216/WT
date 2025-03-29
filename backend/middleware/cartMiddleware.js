const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator");
const User = require("../models/user");
require("dotenv").config();
const cartProtect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
   console.log("headers:",req.headers);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization failed. No token provided.",
      });
    }

    // Extract token after "Bearer "
    const token = authHeader.split(" ")[1];
    console.log(token);
    if (!token) {
      return res
        .status(404)
        .json({ success: false, message: "Authorization failed .. try again" });
    }
    const decoded_id = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded:",decoded_id);
    req.body._id = decoded_id._id;
    next();
  } catch (error) {
    console.log("Failed...!", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to authorize user", error });
  }
};
module.exports=cartProtect;
