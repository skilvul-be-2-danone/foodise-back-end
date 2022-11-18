const mongoose = require('mongoose')
const { Schema } = mongoose

const skemaFood = new Schema({
    name: {
        type : String,
        required : true
    },
    calori: {
        type : Number,
        required : true
    },
    carbon: {
        type : Number,
        required : true
    },
    label: {
        type : String,
        required : true
    }
})

const food = mongoose.model("foods", skemaFood)

module.exports = food