import mongoose from "mongoose";
 
// ● Book ID
// ● Title
// ● Author ID
// ● Publisher
// ● Publish Date
// ● Category
// ● Price
// ● Sold Count


//defining Schema
const bookSchema=new mongoose.Schema({
    Book_ID:{type:String,required:true,trim:true},
    Title:{type:String,required:true,trim:true},
    Author_ID:{type:String,required:true,trim:true},
    Publisher:{type:String,required:true,trim:true},
    Publish_Date:{type:String,required:true,trim:true},
    Category:{type:String,required:true,trim:true},
    Price:{type:String,required:true,trim:true},
    Sold_Count:{type:String,required:true,trim:true}
})

//Model
const bookModel=mongoose.model("book",bookSchema);
export default bookModel;