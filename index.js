


const mongoose = require('mongoose');
const User = require("./user");
const user = require('./user');

mongoose.connect("mongodb://127.0.0.1:27017/testdb")


async function run() {
    try {
const user=await User.findOne({name:'rinsha'})
    //    const update=await User.updateMany({hobbies:["learn","sing"]})

    //     const findid=await User.findById("67121fc76aea31cce088277e")
    //     console.log(update);
    //     console.log(findid);
await user.save()
        console.log(user);
        console.log(user.namedemail);
        
        user.sayHii()
        
        



    } catch (error) {
        console.log(error.message);

    }

}


run()