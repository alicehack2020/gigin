import UserModel from "../model/User.js";
import bookModel from "../model/Book.js";
 

class UserController{
   

  // Author_ID:{type:String,required:true,trim:true},
  // Name:{type:String,required:true,trim:true},
  // Phone_number:{type:String,required:true,trim:true},
  // Birth_Date:{type:String,required:true,trim:true},
  // Death_Date:{type:String,required:true,trim:true},

  static addAuthor=async(req,res)=>{
    const {Author_ID,Name,Phone_number,Birth_Date,Death_Date}=req.body;
   
     var dateCheck=Birth_Date[0]+Birth_Date[1]

     if(Number(dateCheck)>31){
      res.send({"message":"invalid Birth date","status":"failled"})
     }

    try{
      const doc=new UserModel({
        Author_ID:Author_ID,
        Name:Name,
        Phone_number:Phone_number,
        Birth_Date:Birth_Date,
        Death_Date:Death_Date,
      })
  
      await doc.save()
  
      res.send({"message":"author added","status":"success"})
    } 
    
    catch(error)
    {
      res.send({"message":"author added"})
    }
   

  }

  // Book_ID:{type:String,required:true,trim:true},
  // Title:{type:String,required:true,trim:true},
  // Author_ID:{type:String,required:true,trim:true},
  // Publisher:{type:String,required:true,trim:true},
  // Publish_Date:{type:String,required:true,trim:true},
  // Category:{type:String,required:true,trim:true},
  // Price:{type:String,required:true,trim:true},
  // Sold_Count:{type:String,required:true,trim:true}

  static addBook=async(req,res)=>{
    const {Book_ID,Title,Author_ID,Publisher,Publish_Date,Category,Price,Sold_Count}=req.body;
   
    const doc=new bookModel({
      Book_ID:Book_ID,
      Title:Title,
      Author_ID:Author_ID,
      Publisher:Publisher,
      Publish_Date:Publish_Date,
      Category:Category,
      Price:Price,
      Sold_Count:Sold_Count,
    })

    await doc.save()

    res.send({"message":"book added"})

  }

  static showAuthor=async(req,res)=>{
    const data=await UserModel.find();
    var author=[]
     for(var i=0;i<data.length;i++)
     {
      author.push(data[i].Name)
     }
    res.send({"message":"author list","data":author})
    
  }

  static findBookByAuthorName=async(req,res)=>{
     const {name}=req.body;
     const author=await UserModel.find({"Name":name})
     const {Author_ID}=author[0]

      const data=await bookModel.find({"Author_ID":Author_ID});
      res.send({"message":"book found","data":data})
    
  }


  static catlogList=async(req,res)=>{
    

     const data=await bookModel.find();

     var catlog=[]

     for(var i=0;i<data.length;i++)
     {
        catlog.push(data[i].Category)
     }

     res.send({"message":"catlog","data":catlog})
   
 }

 static mostSoldBuyCategory=async(req,res)=>{
  const {catlog_name}=req.body
  const data=await bookModel.find({"Category":catlog_name});

  let max=0
  let info={}
  for(var i=0;i<data.length;i++)
  {
      if(max<Number(data[i].Sold_Count))
      {
        max=Number(data[i].Sold_Count)
        info=data[i]
      }
  }

  res.send({"message":"sucssess","data":info})
  
}
   




    
}

export default UserController;