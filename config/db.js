const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        mongoose.connect("mongodb+srv://kishoore004:Siva%405@jk.itech.mongodb.net/practice")

    }
    catch(error){
        console.error(error.message);
    }
}
module.exports=connectDB;