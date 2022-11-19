const validator = require("validator");
const isEmpty = require("./is-empty")

module.exports = function validateRegisterInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name:"" ; 
    data.email = !isEmpty(data.email) ? data.email:"" ; 
    data.password = !isEmpty(data.password) ? data.password:"" ;
    data.role = !isEmpty(data.role) ? data.role:"" ;


    if(validator.isEmpty(data.name)){
        errors.name = "Data nama dibutuhkan";
    }
    
    if(validator.isEmpty(data.email)){
        errors.email = "Data Email dibutuhkan";
    }

    if(!validator.isEmail(data.email)){
        errors.email = "Email tidak valid";
    }

    if(validator.isEmpty(data.password)){
        errors.password = "Data Password dibutuhkan";
    }
    if (validator.isEmpty(data.role)) {
        errors.role = `isi data dengan role "member" atau "admin" `;
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}