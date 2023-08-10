// require mongoose in a const variable

const mongoose = require('mongoose');

// create a schema for the database
const Schema = mongoose.Schema;

// Create a schema named accountsModel with the properties of firstname,lastname,email,billing_address,and physical_address and export it
const accountsModel = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    physical_address: {
        type: String,
        required: true
    },
    billing_address: {
        type: String,
        required: true
    },
});

// Export the model
module.exports = mongoose.model('accounts', accountsModel);