const express = require("express");
const router=express.Router();

const {signup}=require("../controllers/userControler");

router.post("/signup",signup);

module.exports=router;