const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    title:String,
    price:Number,
    brand:String
})

module.exports=mongoose.model('Product',productSchema)