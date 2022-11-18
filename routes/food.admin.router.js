const express = require('express')
const foodAdminRoute = express.Router()

const {
    getAllFoods, 
    getFoodById, 
    addFood, 
    updateFoodById, 
    deleteFoodById
} = require('../controllers/food.admin.controller')

foodAdminRoute.get("/foods", getAllFoods)
foodAdminRoute.get("/foods/:id", getFoodById)
foodAdminRoute.post("/foods", addFood)
foodAdminRoute.put("/foods/:id", updateFoodById)
foodAdminRoute.delete("/foods/:id", deleteFoodById)

module.exports = foodAdminRoute