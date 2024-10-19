const mongoose=require("mongoose")
const Fruit=require('./fruits')
const Post=require('./post')
const Customer=require('./customer')
const customer = require("./customer")
mongoose.connect("mongodb://127.0.0.1:27017/medb")

// async function createFruits() {
//     const fruit= await Fruit.create([
//         {name:'apple',
//             price:200,
//             color:'red'
//         },
//         {name:'orange',
//             price:100,
//             color:'green'
//         },
//         {name:'grapes',
//             price:300,
//             color:'purple'
//         },

        
//     ])
       
//     console.log(fruit);
    
// }
// createFruits()

async function addCustomer() {
    const customer = new Customer({
        firstName: 'John',
        lastName:'Doe',
        email: 'john@example.com'
    });
    await customer.save();
    console.log('customer created:',customer );
    console.log('fullname of customer',customer.fullName);
    
}



async function addPost(userId) {
    const post = new Post({
        title: 'My First Post',
        body: 'This is the body of my first post',
        author: userId // Assign the User's ObjectId as the author
    });
    await post.save();
    console.log('Post created:', post);
}


async function getPosts() {
    const posts = await Post.find().populate('author'); // Fetch posts and populate the author field
    console.log(posts);
}



async function run() {
    await addCustomer(); // First, add a user
    const customer = await Customer.findOne({ email: 'john@example.com' }); // Find the newly created user
    console.log(customer);
    

    await addPost(customer._id); // Create a post for that user

    await getPosts(); // Fetch all posts with author populated
}

run();