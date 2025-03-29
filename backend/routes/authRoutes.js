const express=require("express");
const passport=require("passport");
const {loginUser,registerUser,adminlogin}=require("../controllers/authController");

const router=express.Router();

router.get("/google",passport.authenticate('google',{scope:["profile","email"]}))

router.get("/google/callback",passport.authenticate('google',{
    successRedirect:"http://localhost:3000/home",
    failureRedirect:"http://localhost:3000/"
}));

router.get("/logout",(req,res)=>{
    req.logOut(()=>{
        res.send("Successfully Loged Out ...!");
        req.session.destroy();
    })
})

router.post("/signup",registerUser);
router.post("/signin",loginUser);
router.post("/admin",adminlogin);
module.exports=router;