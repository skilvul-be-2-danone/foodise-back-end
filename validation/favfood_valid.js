const validator = require("validator");
const isEmpty = require("./is-empty")

module.exports = function validateFavFoodInput(data){
    let errors = {};

    data.user = !isEmpty(data.user) ? data.user:"" ; 
    data.food = !isEmpty(data.food) ? data.food:"" ;


    if(validator.isEmpty(data.user)){
        errors.user = "Data id user dibutuhkan";
    }

    if (validator.isEmpty(data.food)) {
        errors.food = `Data id food dibutuhkan `;
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}