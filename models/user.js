const mongoose = require('mongoose')
const { Schema } = mongoose

const skemaUser = new Schema({
    name: {
        type : String,
        required : true
    },
    email: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    },
    role: {
        type : String,
        enum : { 
            values: ['member','admin'],
            message: `isi role data dengan "member" dan "admin"`
        },
        required : true
    }
})

const user = mongoose.model("users", skemaUser)

module.exports = user