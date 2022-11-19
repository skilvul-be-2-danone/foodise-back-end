const mongoose = require("mongoose");

const database_url = process.env.MONGO_URI || "mongodb+srv://jasminehertiana:jasmine240303@skilvul-back-end-gpa.amlzlfb.mongodb.net/foodise-be2?retryWrites=true&w=majority";

const database = mongoose.connect(database_url)

module.exports = database;