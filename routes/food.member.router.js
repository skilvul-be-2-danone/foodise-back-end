const express = require('express')
const foodMemberRoute = express.Router()

const {
    addFavFood,
    getFavFoods,
    getFavFoodByUserId,
    deleteFavFoodById
} = require('../controllers/food.member.controller')

foodMemberRoute.post("/favorite", addFavFood)
foodMemberRoute.get("/favorite", getFavFoods)
foodMemberRoute.get("/favorite/:user", getFavFoodByUserId)
foodMemberRoute.delete("/favorite/:id", deleteFavFoodById)


module.exports = foodMemberRoute