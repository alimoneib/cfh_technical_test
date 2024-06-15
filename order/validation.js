const Joi = require("joi");

class OrderValidation {
  itemSchema = Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.number().required(),
  });

  addSchema = Joi.object({
    items: Joi.array().items(this.itemSchema).required(),
  });

  getSchema = Joi.object({
    userId: Joi.string().required()
  })
}

module.exports = new OrderValidation();
