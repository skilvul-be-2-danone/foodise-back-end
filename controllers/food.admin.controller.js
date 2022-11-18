const foods = require("../models/food")
const jwt = require('jsonwebtoken')
const validateFoodInput = require('../validation/food_valid')

module.exports = {
    getAllFoods: async (request, response) => {
        try {
            const food = await foods.find({})
            response.json({
                "food data": food
            })
        } catch (error) {
            response.status(404).json({
                message: "food data not found",
                error: error.message
            })
        }
    },
    getFoodById: async (request, response) => {
        try {
            const food = await foods.findOne({ _id: request.params.id });

            response.json({
                "food data": food
            });
        } catch (error) {
            response.status(404).json({
                message: "Food data not found",
                error: error.message,
            });
        }
    },
    addFood : async (request, response) => {
        const {errors, isValid, isCalZero, isCarZero, isCalNaN, isCarNaN} = validateFoodInput(request.body);
        if(isCalNaN || isCarNaN || isCalZero || isCarZero || !isValid ){
                return response.status(400).json(errors);
        } else {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isAuth = jwt.verify(token, "goldenhour")
            console.log(isAuth);

            const data = request.body
            const food = await new foods(data)
            food.save()

            response.status(201).json({
                message: "food data created successfully",
                "food data": food
            })

        } catch (error) {
            response.status(400).json({
                message: "Unauthorized, failed create food data",
                error: error.message
            })
        }
        }
    },
    updateFoodById: async (request, response) => {
        const {errors, isValid, isCalZero, isCarZero, isCalNaN, isCarNaN} = validateFoodInput(request.body);
        if(isCalNaN || isCarNaN || isCalZero || isCarZero || !isValid ){
                return response.status(400).json(errors);
        } else {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isAuth = jwt.verify(token, "goldenhour")
            console.log(isAuth);

            const data = request.body
            const food = await foods.findByIdAndUpdate({ _id: request.params.id }, {
                name: data.name,
                calori: data.calori,
                carbon: data.carbon,
                label: data.label
            });

            if (food) {
                response.status(201).json({
                    message: "food data has been update successfully"
                });
            }
        } catch (error) {
            response.status(401).json({
                message: "Unauthorized, food data cannot be updated",
                error: error.message,
            });
        }
        }
    },
    deleteFoodById: async (request, response) => {
        try {
            const auth = await request.headers.authorization
            const token = auth.split(' ')[1]
            console.log(token);
            const isValid = jwt.verify(token, "goldenhour")
            console.log(isValid);
            const food = await foods.findOneAndDelete({ _id: request.params.id });

            response.status(200).json({
                message: "food data has been deleted successfully !"
            });
        } catch (error) {
            response.status(401).json({
                message: "Unauthorized, failed delete food data",
                error: error.message,
            });
        }
    }
}