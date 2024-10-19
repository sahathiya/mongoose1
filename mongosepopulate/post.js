const mongoose=require("mongoose")
// Define a schema for a Post
const postSchema = new mongoose.Schema({
    title: String,
    body: String,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer' // Referencing the User model
    }
});

module.exports = mongoose.model('Post', postSchema);



