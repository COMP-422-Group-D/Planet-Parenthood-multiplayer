const mongoose = require('mongoose');
const Schema =mongoose.Schema;

//create users Schema & model
const userSchema= new Schema({
    username:
    {
     type:String,
     required:[true,'username is required']
    },
    email:
    {
     type:String,
     required:[true,'email is required']
    },
    password:
    {
     type:String,
     required:[true,'password is required']
    },
    confirmPassword:
    {
     type:String,
     required:[true,'Confirm password ']
    },
    score:
    {
     type:Number,
        default:0
    },
    profileImg: 
    {
     type:String,
        default:"no-img"
    }
});

const User= mongoose.model("user",userSchema);

module.exports= User;

