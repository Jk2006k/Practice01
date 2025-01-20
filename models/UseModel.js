const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required:true,
        match:[/^[a-zA-Z0-9 ]+$/,"user name invalid"]

    },
    email:{
        type: String,
        required:true,
        match:[/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/,"email is invaid"]

    },
    password:{
        type: String,
        required:true,
        minlenght:[8,"lenght of password should be minimum 8"],
        validate:{
            validator:validatePassword,
            message:"password must contain one upper , one lower case , one numder and one symbol"
        }

    },
    dob:{
        type: Date,
        required:true,
        validate:{
            validator:validateAge,
            message:"age should be getter than or equal to 18"
        }


    }
})

module.exports=mongoose.model("User",userSchema);

function validatePassword(password){
    return(
        /[A-Z]/.test(password)&&
        /[a-z]/.test(password)&&
        /[0-9]/.test(password)&&
        /[!@#$%^&*]/.test(password)

    )
}

function validateAge(dob){
    let currentYear=new Date().getFullYear();
    let userYear=dob.getFullYear()
    let age=currentYear-userYear;
    return age>17;

}

