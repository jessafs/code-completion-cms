// import contact-models
const Contact = require('../models/contact-models');

exports.addContact = async (contact) => {
    try {
        const addContact = await Contact.create(contact)
        if (addContact === null) {
            return { code: 422, msg: "Unprocessable request" };
        } else {
            return { code: 201, msg: "Created", data: addContact };
        }
    } catch (error) {
        return { code: 500, msg: "Internal Server Error", data: error };
    }
}

exports.getAllContact = async () => {
    try {
        const getAllData = await Contact.find({})
        if (Object.keys(getAllData).length === 0) {
            return { code: 204, msg: "No Content" };
        } else {
            return { code: 200, msg: "OK", data: getAllData };
        }
    } catch (error) {
        return { code: 500, msg: "Internal Server Error", data: error };
    }
}
