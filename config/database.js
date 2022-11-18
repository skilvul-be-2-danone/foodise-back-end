const mongoose = require("mongoose");

const database_url = process.env.MONGO_URI || "mongodb://localhost:27017/foodise-be2";

const database = mongoose.connect(database_url)

module.exports = database;