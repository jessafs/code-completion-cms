const contactServices = require("../services/contact-services")
// Create a asynchronous function named addContact with a req and res parameter

exports.addContact = async (req, res) => {
    try {
        // Create a new contact object with the request body
        const contact = req.body;
        if (contact) {
            const addContact = await contactServices.addContact(contact)
            // Send a response with the contact object
            return res.json({ data: addContact, msg: "success" });
        } else {
            return req.json({ msg: "No contact" })
        }
    } catch (error) {
        return res.json({ err: error })
    }

};

exports.getAllContact = async (req,res)=>{
    try {
        const getContact = await contactServices.getAllContact()
        return res.json({data:getContact, msg:"success"})
    } catch (error) {
        return res.json({err:error})
    }
}

// Create a asynchronous function named updateContact with a req and res parameter
exports.updateContact = async (req, res) => {
    // Find the contact by the id and update it with the request body
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    // Send a response with the contact object
    res.json(contact);
};

// Create a asynchronous function named deleteContact with a req and res parameter
exports.deleteContact = async (req, res) => {
    // Find the contact by the id and delete it
    await Contact.findByIdAndDelete(req.params.id);
    // Send a response with a message
    res.json({ message: "Contact deleted" })
}
