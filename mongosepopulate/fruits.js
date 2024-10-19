const mongoose=require("mongoose")
const fruitSchema=new mongoose.Schema({
    name:String,
    price:Number,
    color:String
})

module.exports=mongoose.model('Fruit',fruitSchema)