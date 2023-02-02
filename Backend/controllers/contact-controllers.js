const contactServices = require("../services/contact-services");
// Create a asynchronous function named addContact with a req and res parameter

exports.addContact = async (req, res) => {
  try {
    // Create a new contact object with the request body
    const contact = req.body;
    if (contact) {
      const addContact = await contactServices.addContact(contact);
      // Send a response with the contact object
      return res.json({ data: addContact, msg: "success" });
    } else {
      return req.json({ msg: "No contact" });
    }
  } catch (error) {
    return res.json({ err: error });
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const getContact = await contactServices.getAllContacts();
    return res.json({ data: getContact, msg: "success" });
  } catch (error) {
    return res.json({ err: error });
  }
};

// Create a asynchronous function named updateContact with a req and res parameter
exports.updateContact = async (req, res) => {
  try {
    const contact = await contactServices.updateContact(req.params.id, req.body);
    res.json({
      success: true,
      message: "Contact updated successfully",
      data: contact,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create a asynchronous function named deleteContact with a req and res parameter
exports.deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const deletedContact = await contactServices.deleteContact(contactId);

    if (!deletedContact) {
      return res.status(404).json({ msg: "Contact not found" });
    }
    res.json({ msg: "Contact deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
