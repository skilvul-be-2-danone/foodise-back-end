const express = require('express')
const userRoute = express.Router();

const { 
    getAllUsers, 
    getUserById,
    updateUserById,
    deleteUserById
} = require('../controllers/user.controller')

userRoute.get("/users", getAllUsers)
userRoute.get("/users/:id", getUserById)
userRoute.put("/users/:id", updateUserById)
userRoute.delete("/users/:id", deleteUserById)

module.exports = userRoute