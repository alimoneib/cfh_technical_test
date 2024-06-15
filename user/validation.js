const Joi = require("joi");

class UserValidation {
  registerationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  });

  loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
  });
}

module.exports = new UserValidation();
