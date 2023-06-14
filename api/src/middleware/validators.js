const Joi = require ('joi');


const userRegisterSchema = Joi.object({
    firstname: Joi.string().alphanum().max(150).required(),
    lastname: Joi.string().max(150).required(),
    email: Joi.string().email().max(250).required(),
    password : Joi.string().max(255).required(),
    id_location : Joi.number().required()
}) //define the "schema" which validate the datas

// const userUpdateSchema = Joi.object({
//     firstname: Joi.string().alphanum().max(150).required(),
//     lastname: Joi.string().max(150).required(),
//     occupation : Joi.string().max(150),
//     service : Joi.string().max(150),
//     picture : Joi.string().max(150),
//     phone : Joi.string().max(40),
//     id_role : Joi.string().max(40),
//     id_location : Joi.string().max(40),
//     email: Joi.string().email().max(250).required(),
//     password : Joi.string().max(255).required()
// }) //define the "schema" which validate the datas


const validateRequest = (req, res, next) => {

    let schema;
    if(req.path = '/register'){
        schema = userRegisterSchema;
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