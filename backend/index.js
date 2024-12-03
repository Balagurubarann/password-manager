const express = require("express");
const connection = require('./config/database');
require('dotenv').config();

const app = express();
const PORT = 3000;

connection
    .then(() => console.log("Database Connected!"))
    .catch(err => console.error(err));

app.use(express.json());
app.use('/', require('./routes/route'));


app.listen((PORT) => console.log(`App running at port ${PORT}`));
