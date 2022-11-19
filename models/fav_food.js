const mongoose = require('mongoose')
const { Schema } = mongoose

const skemaFavFood = new Schema({
    user: {
        type : mongoose.ObjectId,
        ref : "users"
    },
    food: {
        type : mongoose.ObjectId,
        ref : "foods"
    }
})

const favFood = mongoose.model("favorite_food", skemaFavFood)

module.exports = favFood