const favFoods = require("../models/fav_food")
const jwt = require('jsonwebtoken')
const validateFavFoodInput = require('../validation/favfood_valid')

module.exports = {
    addFavFood: async (request, response) => {
        const {errors, isValid} = validateFavFoodInput(request.body);
        if(!isValid ){
                return response.status(400).json(errors);
        } else {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isAuth = jwt.verify(token, "jamemas")
            console.log(isAuth);

            const data = request.body
            const favFood = await new favFoods(data)
            favFood.save()

            response.status(201).json({
                message: "favorite food data added successfully",
                "favorite food": favFood
            })

        } catch (error) {
            response.status(400).json({
                message: "Unauthorized, failed add favorite food data"
            })
        }
        }
    },
    getFavFoods: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isAuth = jwt.verify(token, "jamemas")
            console.log(isAuth);

            const favFood = await favFoods.find({}).populate("food")
            response.json({
                "favorite": favFood
            })
        } catch (error) {
            response.status(404).json({
                message: "Unauthorized, favorite food not found",
                error: error.message
            })
        }
    },
    getFavFoodByUserId: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isAuth = jwt.verify(token, "jamemas")
            console.log(isAuth);

            const favFood = await favFoods.find({ user: request.params.user }).populate("food")

            response.json({
                "favorite": favFood
            });
        } catch (error) {
            response.status(404).json({
                message: "favorite food not found",
                error: error.message,
            });
        }
    },
    deleteFavFoodById: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isAuth = jwt.verify(token, "jamemas")
            console.log(isAuth);

            const favFood = await favFoods.findOneAndDelete({
                _id: request.params.id,
            })

            response.json({
                message: "favorite food data deleted successfully"
            })
        } catch (error) {
            response.status(500).json({
                message: "failed delete favorite food data",
                error: error.message
            })
        }
        
    }
}