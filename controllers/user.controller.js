const User = require("../models/user")
const bcrypt = require("bcrypt");
const validateRegisterInput = require("../validation/signup");

module.exports = {
    getAllUsers: async (request, response) => {
        try { 
            const users = await User.find({})
            response.json({
                "data user": users
            })
        } catch (error) {
            response.status(404).json({
                message: "user data not found",
                error: error.message
            })
        }
    },
    getUserById: async (request, response) => {
        try {
            const users = await User.findOne({ _id: request.params.id });

            response.json({
                "user data": users
            });
        } catch (error) {
            response.status(404).json({
                message: "user data not found",
                error: error.message,
            });
        }
    },
    updateUserById: async (request, response) => {
        try {
            const data = request.body
            const {errors,isValid} = await validateRegisterInput(request.body);
            if(!isValid){
                return response.status(400).json(errors);
            }
            const users = await User.findByIdAndUpdate({ _id: request.params.id }, {
                name: data.name,
                email: data.email,
                password: bcrypt.hashSync(data.password, 10),
                role: data.role
            });

            if (users) {
                response.status(201).json({
                    message: "user data has been update successfully"
                });
            }
        } catch (error) {
            response.status(401).json({
                message: "Unauthorized, user data cannot be updated",
                error: error.message,
            });
        }
    },
    deleteUserById: async (request, response) => {
        try {
            const users = await User.findOneAndDelete({ _id: request.params.id });

            response.status(200).json({
                message: "user data has been deleted successfully !"
            });
        } catch (error) {
            response.status(401).json({
                message: "Unauthorized, failed delete user data",
                error: error.message,
            });
        }
    }
}