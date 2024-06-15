const Joi = require("joi");

class ProductValidation {
  addSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    quantity: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
  });

  updateSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().optional(),
    description: Joi.string().optional(),
    quantity: Joi.number().min(0).optional(),
    price: Joi.number().min(0).optional(),
  });

  getSchema = Joi.object({
    names: Joi.string().allow(null,'').optional()
  })

  deleteSchema = Joi.object({
    id: Joi.string().required()
  });
}

module.exports = new ProductValidation();
