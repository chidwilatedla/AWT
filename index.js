const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const app=express()
app.use(express.json)
mongoose.connect('mongodb://localhost:27017/AWT')
.then(()=>{
    console.log("connected to mongodb");
})
.catch((err)=>{
    console.log(err);
})
const user=mongoose.model('user',new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,requierd:true,unique:true},
    password:{type:String,required:true} 
}))
app.post('/register',(req,res)=>{
    const{name,email,password}=req.body;
    const user=new user({name,email,password});
    user.save();
})
app.post('/login',(req,res)=>{
    const login=new login({email,password});
})
const products=mongoose.model('products',new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String},
    price:{type:Number,required:true},
    category:{type:String,required:true},
    Stock:{type:Number}
}))
app.post('/register',(req,res)=>{
    const user=new user ;
    user.save();
})
// // app.post('/login',(req,res)=>{
//    // const login=new login;
// })
// app.get('./products',(req,res)=>{
//     productSchema;
// })
// app.get('./products/:id',(req,res)=>{
//     productSchema;
// })
// app.post('addproducts',(req,res)=>{
    
//     const products=new products(name,description,price,category,Stock); 
// })
// app.put('./products/:id',(req,res)=>{
// })
// app.delete('./products/:id',(req,res)=>{
   
// })

app.listen(2000,()=>{
    console.log("server is running on port 2000");
})
