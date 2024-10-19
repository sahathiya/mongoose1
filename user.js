const mongoose=require("mongoose")
const addresschema=new mongoose.Schema({
    street:String,
    city:String
})
const userSchema=new mongoose.Schema({
    name:String,
    age:{
        type:Number,
        min:1,
        max:100,
        validate:{
            validator:v=>v%2===0,
            message:props=>`${props.value} is not an even number`//custom validation
        }
    },
    email:{
       type: String,
       minLength:10,
       required:true,
       uppercase:true
    },
    createdAt:{
       type: Date,
       immutable:true,
       default:()=>Date.now()
    },
    updateAt:{
        type: Date,
       default:()=>Date.now()
    },
    bestfriend:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:"User"
},
    hobbies:[String],
    address:addresschema
})


userSchema.methods.sayHii=function(){
    console.log(`hi my name is ${this.name}`);
    
}
userSchema.statics.findByName=function(name){
    return this.where({name:new RegExp(name,'i')})

}

userSchema.query.byName=function(name){
    return this.where({name:new RegExp(name,'i')})

}
userSchema.virtual('namedemail').get(function (){
    return `${this.name} and ${this.email}`
})
userSchema.pre('save',function(next){
    this.updateAt=Date.now() //middleware
    next()
})
userSchema.post('save', function(doc, next) {
    console.log('User has been saved:', doc);
    next();
});

 module.exports=mongoose.model('User',userSchema)