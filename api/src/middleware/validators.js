const Joi = require ('joi');

const strongPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// RegExp to ensure that the password it valid
const passswordFormatError = "Le mot de passe doit contenir au minimum une lettre en majuscule, une lettre en minuscule, un chiffre et un caractère spécial et doit être constitué de 8 caractères minimum"
//message sent if the password is not valid


//SCHEMA TO VALIDATE DATAS FROM USER REGISTER
const userRegisterSchema = Joi.object({
    
    firstname: Joi.string().alphanum().max(150).required(),
    lastname: Joi.string().max(150).required(),
    email: Joi.string().email().max(250).required(),
    password : Joi.string()
        .regex(strongPasswordRegex).required().messages({"string.pattern.base": `${passswordFormatError}`}),
    id_location : Joi.number().required()

});


const validateRequest = (req, res, next) => {
    const request = req.path;
    let schema;

    switch(request){
        case '/register' :
            schema = userRegisterSchema;
            break;
    }

    const { error } = schema.validate(
        req.body,
        { abortEarly : false}
    ); //getting the eventual errors

    if (error) {
        res.status(422).json({ validationErrors : error.details })
        //if there are some errors, it returns the errors
    }else{
        next();
    }
};

module.exports = {
    validateRequest,
}