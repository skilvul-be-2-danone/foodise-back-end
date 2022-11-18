const jwt = require('jsonwebtoken')
const User = require("../models/user");
const bcrypt = require("bcrypt");
const validateRegisterInput = require("../validation/signup");

module.exports = {
    signupAuth: async (request, response) => {
        
        const userEmail = await User.findOne({email: request.body.email})
        if(userEmail){
            return response.status(400).json({'email' : 'Alamat email sudah digunakan'});
        } 
        const userData = request.body;

        passwordHashed = bcrypt.hashSync(request.body.password, 10)
        userData.password = passwordHashed
        const user = await new User(userData)
        const {errors,isValid} = await validateRegisterInput(request.body);
        if(!isValid){
            return response.status(400).json(errors);
        } else {
            user.save()
                
            response.json({
                message: "your profile created successfully, let's login !",
                "your profile" : user
            });
        }
    },

    signinAuth: async (request, response) => {
        try {
            const userData = await request.body
            const user = await User.findOne({ email: userData.email })
            if (user) {
                const passwordChecked = bcrypt.compareSync(userData.password, user.password);

                if (passwordChecked) {
                    if (user.role === "admin") {
                        const token = jwt.sign(
                            {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }, "goldenhour", { expiresIn: '5h'}
                        )
                        response.json({
                            message: "login success, welcome!",
                            "role": user.role,
                            "your token" : token
                        })
                    } else {
                        const token = jwt.sign(
                            {
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }, "jamemas", { expiresIn: '5h'}
                        )
                        response.json({
                            message: "login success, welcome!",
                            "role": user.role,
                            "your token" : token
                        })
                    }
                } else {
                    response.status(500).json({
                        message: 'your password went wrong'
                    })
                }
            } else {
                response.status(400).json({
                    message: 'cant login coz your email or password went wrong'
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
}