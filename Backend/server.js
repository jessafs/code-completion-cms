// require dotenv

require('dotenv').config();

// require express
const express = require('express');

// require body-parser
const bodyParser = require('body-parser');

// require cors
const cors = require('cors');

// require mongoose
const db = require('./database/init');
db.connectDB()
// require routes
const routes = require('./routes/contact-routers');

// create express app
const app = express();

// set port
const PORT = process.env.PORT || 4001;

// set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// set up routes
app.use('/api/account',routes);

// set up mongoose
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/nytreact');

// start server
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
}); 