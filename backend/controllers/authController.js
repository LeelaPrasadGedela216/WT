const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const validator = require("validator");
const generateToken = (id, source) => {
  return jwt.sign({ _id: id, source }, process.env.JWT_SECRET, { expiresIn: "2h" });
};

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const exist = await User.findOne({ email });
    if (exist) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists..!" });
    }
    console.log("exists checked");
    if (!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid Email" });
    }

    const salt = await bcrypt.genSalt(10);
    console.log("salt created");
    const hashedPassword = await bcrypt.hash(password, salt);
   console.log("password hashed ..!")
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    console.log("user created");

    console.log("user saved");
    const token = generateToken(user._id,"manual");
    console.log("token created");
    res.status(201).send({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    });
    console.log(user);
  } catch (error) {
    res.status(500).json({ message: "Error in Registering the User ", error });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User doesn't exist..!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = generateToken(user._id,"manual");
      return res.status(200).json({
        userId: user._id,
        name: user.name,
        email: user.email,
        token: token,
      });
    } else {
      return res.status(404).json({ message: "Invalid Credentials..!" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Failed to Login ", error });
  }
};

exports.adminlogin = async (req, res) => {
  console.log("admin login entered")
  try {
    const { email, password } = req.body;
    console.log(email,password);
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token=jwt.sign (email+password,process.env.JWT_SECRET);

      res.json({success:true,token});
    }
    else{
      res.json({message:"Authentication failed "})
    }
  } catch (error) {
    res.json({message:"Authentication failed ",error})
  }
};
