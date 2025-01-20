const User=require('../models/UseModel')

const signup=async (req,res) =>{
    try{
        const{email,password,name,dob}=req.body;
        const user=await User.findOne({email});
        if(user){
            return req.status(400).send("User already exits");
        }
        const newUser= new User({
            email,
            password,
            name,
            dob
        });
        await newUser.save();
        return res.status(200).send("user saved in DB");
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports={signup};