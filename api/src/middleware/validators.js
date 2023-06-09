const Joi = require("joi");

const strongPasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
// RegExp to ensure that the password it valid

const validEmailRegex = /@makesense\.com$/;
// RegExp to ensure that the email is containing '@makesense.com'

const passswordFormatError =
  "Le mot de passe doit contenir minimum une majuscule, une minuscule, un chiffre et un caractère spécial et faire minimum 8 caractères";
//message sent if the password is not valid

const emailFormatError = "L'email doit appartenir au domaine @makesense.com";
//message sent if the email is not containing '@makesense.com'

//SCHEMA TO VALIDATE DATAS FROM USER REGISTER
const userRegisterSchema = Joi.object({
  firstname: Joi.string().alphanum().max(150).required(),
  lastname: Joi.string().max(150).required(),
  email: Joi.string()
    .regex(validEmailRegex) // check if the domain contain @makesense.com
    .email()
    .max(250)
    .required()
    .messages({ "string.pattern.base": `${emailFormatError}` }),
  password: Joi.string()
    .regex(strongPasswordRegex)
    .required()
    .messages({ "string.pattern.base": `${passswordFormatError}` }),
  id_location: Joi.number().required(),
});

//SCHEMA TO VALIDATE DATAS FROM USER UPDATE
const userUpdateSchema = Joi.object({
  firstname: Joi.string().alphanum().max(150).required(),
  lastname: Joi.string().max(150).required(),
  service: Joi.string().max(150),
  fonction: Joi.string().max(150),
});

const validateRequest = (req, res, next) => {
  const request = req.path;
  let schema;

  switch (request) {
    case "/register":
      schema = userRegisterSchema;
      break;
    case "/profile":
      schema = userUpdateSchema;
      break;
  }

  const { error } = schema.validate(req.body, { abortEarly: false }); //getting the eventual errors

  if (error) {
    res.status(422).json(error.details);
    //if there are some errors, it returns the errors
  } else {
    next();
  }
};

module.exports = {
  validateRequest,
};
