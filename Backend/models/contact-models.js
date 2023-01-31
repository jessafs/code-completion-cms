// require mongoose in a const variable

const mongoose = require('mongoose');

// create a schema for the database
const Schema = mongoose.Schema;

// Create a schema named accountsModel
const accountsModel = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
});

// Export the model
module.exports = mongoose.model('accounts', accountsModel);