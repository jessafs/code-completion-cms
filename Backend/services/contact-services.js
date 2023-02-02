// import contact-models
const Contact = require("../models/contact-models");

exports.addContact = async (contact) => {
  try {
    const addContact = await Contact.create(contact);
    if (addContact === null) {
      return { code: 422, msg: "Unprocessable request" };
    } else {
      return { code: 201, msg: "Created", data: addContact };
    }
  } catch (error) {
    return { code: 500, msg: "Internal Server Error", data: error };
  }
};

exports.getAllContacts = async () => {
  try {
    const getAllData = await Contact.find({});
    if (Object.keys(getAllData).length === 0) {
      return { code: 204, msg: "No Content" };
    } else {
      return { code: 200, msg: "OK", data: getAllData };
    }
  } catch (error) {
    return { code: 500, msg: "Internal Server Error", data: error };
  }
};

//create updateContact function which takes in a id and params parameter based from the contact model to the exports object
exports.updateContact = function (id, params) {
  return new Promise((resolve, reject) => {
    Contact.findByIdAndUpdate(id, params, { new: true }, (err, contact) => {
      if (err) reject(err);
      else resolve(contact);
    });
  });
};

//create deleteContact function which takes in an id parameter based from the contact model to the exports object
exports.deleteContact = (id) => {
  return new Promise((resolve, reject) => {
    Contact.findByIdAndDelete(id, (err, contact) => {
      if (err) {
        reject(err);
      } else {
        resolve(contact);
      }
    });
  });
};
