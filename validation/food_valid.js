const validator = require("validator");
const isEmpty = require("./is-empty")

module.exports = function validateFoodInput(data){
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name:"" ; 
    data.calori = !isEmpty(data.calori) ? data.calori:"" ;
    data.carbon = !isEmpty(data.carbon) ? data.carbon:"" ;
    data.label = !isEmpty(data.label) ? data.label:"" ;


    if(validator.isEmpty(data.name)){
        errors.name = "Data nama dibutuhkan";
    }

    if(isNaN(data.calori)){
        errors.calori = "Data calori dibutuhkan, diisi dengan angka";
    }
    
    if(data.calori === 0){
        errors.calori = "Data calori dibutuhkan, tidak boleh kosong atau `0`";
    }

    if(isNaN(data.carbon)){
        errors.carbon = "Data carbon dibutuhkan, diisi dengan angka";
    }


    if(data.carbon === 0){
        errors.carbon = "Data carbon dibutuhkan, tidak boleh kosong atau `0`";
    }

    

    if (validator.isEmpty(data.label)) {
        errors.label = `Data health-label dibutuhkan `;
    }
    return {
        errors,
        isValid: isEmpty(errors),
        isCalNaN: isNaN(data.calori),
        isCarNaN: isNaN(data.carbon),
        isCalZero: data.calori === 0,
        isCarZero: data.carbon === 0
    }
}