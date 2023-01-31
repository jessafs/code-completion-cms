const express = require("express")
// import contact-controllers

const contactController = require('../controllers/contact-controllers');

// create contact-router
const contactRouter = express.Router();

// create contact-routes
contactRouter.post('/addContact', contactController.addContact);
contactRouter.get('/getAllContact', contactController.getAllContact);
// contactRouter.get('/:id', contactController.show);
// contactRouter.put('/:id', contactController.update);
// contactRouter.delete('/:id', contactController.destroy);

// export contact-router
module.exports = contactRouter;
