

const express = require('express');
const app = express();
const routes = require("./routes/contact-routers");
// require dotenv
const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");

// set port from the env file
const port = process.env.PORT || 4001;
// require body-parser
const bodyParser = require('body-parser');
const db = require("./database/init");
db.connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));