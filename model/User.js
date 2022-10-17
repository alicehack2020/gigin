import mongoose from "mongoose";
 
//defining Schema
const userSchema=new mongoose.Schema({
    Author_ID:{type:String,required:true,trim:true},
    Name:{type:String,required:true,trim:true},
    Phone_number:{type:String,required:true,trim:true},
    Birth_Date:{type:String,required:true,trim:true},
    Death_Date:{type:String,trim:true},
   
})

//Model
const UserModel=mongoose.model("user",userSchema);
export default UserModel;