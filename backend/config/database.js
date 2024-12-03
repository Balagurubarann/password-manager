const mongoose = require('mongoose');
require('dotenv').config()

const { URI } = process.env;

const connection = mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;
