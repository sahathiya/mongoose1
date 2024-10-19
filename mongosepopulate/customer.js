const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email: String
});
customerSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
});

module.exports = mongoose.model('Customer', customerSchema);
