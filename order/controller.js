const OrderValidation = require("./validation");
const OrderService = require("./service");

class OrderController {
  async getOrders(req, res, next) {
    try {
      const validationResult = OrderValidation.getSchema.validate(req.query);
      if (validationResult.error) {
        throw validationResult.error;
      }
      const { userId } = validationResult.value;

      const orders = await OrderService.getOrders({
        userId,
      }).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: orders,
        message: "Get Orders",
      });
      next();
    } catch (error) {
      next(error);
    }
  }

  async addOrder(req, res, next) {
    try {
      const { id: userId } = req.user
      const validationResult = OrderValidation.addSchema.validate(req.body);
      if (validationResult.error) {
        throw validationResult.error;
      }
      const { items } = validationResult.value;

      const newOrder = await OrderService.addOrder({
        items,
        userId
      }).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: newOrder,
        message: "Add Order",
      });
      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new OrderController();
