// require express and create routes for adding contact, getting all contact, updating contact and deleting contact from contact controller folder
const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contact-controllers");

// Add Contact Route
router.post("/addContact", contactController.addContact);

// Get All Contacts Route
router.get("/getAllContacts", contactController.getAllContacts);

// Update Contact Route
router.put("/updateContact/:id", contactController.updateContact);

// Delete Contact Route
router.delete("/deleteContact/:id", contactController.deleteContact);

module.exports = router;
